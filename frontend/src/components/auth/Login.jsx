import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { RadioGroup } from "@/components/ui/radio-group"
import { Link } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <Navbar />
      <div onSubmit={submitHandler} className="flex items-center justify-center mx-auto max-w-7xl">
        <form action="" className="w-1/2 border border-gray-400 rounded-md p-3 my-10">
          <h1 className="font-bold text-xl mb-5">Login</h1>

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
          </div>
          <Button type="submit" className="w-full my-4 bg-black text-white">Login</Button>
          <span className="text-sm">Don&apos;t have an account? <Link to="/Signup" className='text-blue-600'>SignUp</Link> </span>
        </form>
      </div>
    </div>
  );
}

export default Login