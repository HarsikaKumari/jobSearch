// import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button.jsx"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants.js";
import { setUser } from '../redux/authSlice.js'

const UpdateProfileDialog = ({ open, setOpen }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(state => state.auth);
    const [input, setInput] = useState({
        name: user?.fullname,
        email: user?.email,
        number: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills.map(skill => skill),
        resume: user?.profile?.resume
    });

    const changeInputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.name);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.number);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            setLoading(true)
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                },
            );
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
        setOpen(false);

    }
    const fileChangeHandler = (e) => {
        setInput({ ...input, file: e.target?.files[0] });

    }

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <form onSubmit={submitHandler}>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <input type="text"
                                        name="name"
                                        id="name"
                                        onChange={changeInputHandler}
                                        value={input.name}
                                        className="col-span-3" />
                                </div>
                            </div>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">Email</Label>
                                    <input type="text"
                                        name="email"
                                        onChange={changeInputHandler}
                                        value={input.email}
                                        id="email"
                                        className="col-span-3" />
                                </div>
                            </div>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="number" className="text-right">Number</Label>
                                    <input type="text"
                                        name="number"
                                        value={input.number}
                                        onChange={changeInputHandler}
                                        id="number"
                                        className="col-span-3" />
                                </div>
                            </div>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="bio" className="text-right">Bio</Label>
                                    <input type="text"
                                        name="bio"
                                        onChange={changeInputHandler}
                                        value={input.bio}
                                        id="bio"
                                        className="col-span-3" />
                                </div>
                            </div>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="skills" className="text-right">Skills</Label>
                                    <input type="text"
                                        name="skills"
                                        value={input.skills}
                                        onChange={changeInputHandler}
                                        id="skills"
                                        className="col-span-3" />
                                </div>
                            </div>
                            <div className='grid gap-4 py-4'>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="resume" className="text-right">Resume</Label>
                                    <input type="file"
                                        name="file"
                                        value={input.resume}
                                        onChange={fileChangeHandler}
                                        accept="application/pdf"
                                        id="file"
                                        className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                {
                                    loading ? <div className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"> Please wait! </Loader2></div> : <Button type="submit" className="w-full my-4">Update</Button>
                                }
                            </DialogFooter>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default UpdateProfileDialog