import { Application } from "../model/application.model.js";
import { Job } from "../model/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(404).json({
                message: "Job not found!",
                success: false
            });
        }

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job!",
                success: false,
            });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found!",
                success: false
            });
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        })

        job.application.push(newApplication._id);
        await job.save();
        return res.status(200).json({
            message: "Applied for Job successfully!",
            success: true,
        });

    } catch (error) {
        console.log(error);

    }
}

// for user to get the applied jobs
export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }
        });

        if (!application) {
            return res.status(404).json({
                message: "Application not found!",
                success: false
            });
        }

        return res.status(200).json({
            application,
            success: true,
        })

    } catch (error) {
        console.log(error);

    }
}

//for admin to get the applicants
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const jobs = await Job.findById(jobId).populate({
            path: "application",
            options: ({ sort: { createdAt: -1 } }),
            populate: {
                path: "applicant"
            }
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Applicants not found!",
                success: false
            })
        }
        return res.status(201).json({
            jobs,
            success: true,
        })

    } catch (error) {
        console.log(error);

    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "Status is required!",
                success: false
            });
        }

        const application = await Application.findOne({ _id: applicationId });
        if (!application) {
            return res.status(400).json({
                message: "Application not found",
                success: false
            });
        }
        application.status = status.toLowerCase();
        application.save();

        return res.status(200).json({
            message: "Status updated successfully!",
            success: true
        });

    } catch (error) {
        console.log(error);

    }
}
