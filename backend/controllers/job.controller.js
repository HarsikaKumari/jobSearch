import { Job } from "../model/job.model.js";

//admin will create the jobs
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, position, companyId, experience } = req.body;

        const userId = req.id;

        if (!title || !description || !companyId || !experience || !salary || !location || !jobType || !position || !requirements) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            jobType,
            salary: Number(salary),
            location,
            experience: Number(experience),
            position,
            company: companyId,
            createdBy: userId,
        });

        return res.status(201).json({
            message: "Job created successfully!",
            job,
            success: true
        })

    } catch (e) {
        console.log(e);

    }
}

//for students
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const job = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found!",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.log(error);

    }
}

//for students
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "application",
        });
        if (!job) {
            return res.status(404).json({
                message: "Job not found!",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true
        });
    } catch (e) {
        console.log(e);

    }
}

//jobs created by admin

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const job = await Job.find({ createdBy: adminId }).populate({
            path: "company",
            createdAt: -1
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found!",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);

    }
}
