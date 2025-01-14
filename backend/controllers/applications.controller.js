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
            id: jobId,
            applicant: userId,
        })

        Job.applicant.push(newApplication._id);
        await Job.save();
        return res.status(200).json({
            message: "Applied for Job successfully!",
            success: true,
        });

    } catch (error) {
        console.log(error);

    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: "Job",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "Company",
                options: {sort: {createdAt: -1}},
            }
        });

        if(!application) {
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
