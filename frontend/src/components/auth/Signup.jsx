import { useState } from 'react'
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { RadioGroup } from "@/components/ui/radio-group"
import { Link } from "react-router-dom";

function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });

    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center mx-auto max-w-7xl">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-400 rounded-md p-3 my-10">
                    <h1 className="font-bold text-xl mb-5">SignUp</h1>
                    <div className="my-2" >
                        <Label>Full name</Label>
                        <Input
                            type="text"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="my-2" >
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Enter your Email Id"
                        />
                    </div>
                    <div className="my-2" >
                        <Label>Phone Number</Label>
                        <Input
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            type="number"
                            placeholder="Enter your Phone number"
                        />
                    </div>
                    <div className="my-2" >
                        <Label>Password</Label>
                        <Input
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            type="password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="bg-black text-white w-full my-4">SignUp</Button>
                    <span className="text-sm">Already have an account? <Link to="/login" className='text-blue-600'>Login</Link> </span>
                </form>
            </div>
        </div>
    );
}

export default Signup