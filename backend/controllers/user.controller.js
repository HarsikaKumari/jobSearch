import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import getDataUri from '../utils/data-uri.js'
import cloudinary from "../utils/coudinary.js";

export const register = async (req, res) => {
    try {
        const { fullname, email, password, phoneNumber, role } = req.body;
        if (!fullname || !email || !password || !phoneNumber || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "User already exist with this email Id!",
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            password: hashedPassword,
            phoneNumber,
            role,
            profile: {
                profilePhoto: cloudResponse.secure_url,
            }
        })

        return res.status(201).json({
            message: "Account created Successfully!",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing!",
                success: false
            });
        };

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "No user exists with this email, Try another email!",
                success: false
            });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                message: "Password doesn't matched, try another!",
                success: false
            });
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "User doesn't exist with this role.",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
            phoneNumber: user.phoneNumber,
            profile: user.profile,
        }

        return res.status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'Strict'
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            });
    } catch (err) {
        console.log(err);
    }
}

export const logout = async (req, res) => {
    try {
        res.status(201).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully!",
            success: true
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateProfile = async (req, res) => {

    try {
        const { fullname, email, bio, phoneNumber, skills } = req.body;
        // take file input
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",")
        };

        const userId = req.id; //middleware se aa raha
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User note found",
                success: false
            })
        }
        // Updating user
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (bio) user.profile.bio = bio;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (skillsArray) user.profile.skills = skillsArray;

        //resume 
        if (cloudResponse) {
            user.profile.resume = cloudResponse.secure_url             // saving url
            user.profile.resumeOriginalName = file.originalname     //saving file name
        }

        await user.save();

        user = {
            _id: user._id,
            email: user.email,
            role: user.role,
            phoneNumber: user.phoneNumber,
            profile: user.profile,
        }

        return res.status(200).json({
            message: "Profile updated successfully!",
            user,
            success: true
        })

    } catch (err) {
        console.log(err);

    }
}
