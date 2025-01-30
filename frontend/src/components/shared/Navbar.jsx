// import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = false;
  return (
    <div className="bg-white px-6">
      <div className="flex items-center justify-between m-6">
        <h1 className="text-2xl font-bold">
          Job <span className="text-[#3D0000]"> Portal </span>
        </h1>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium text-center gap-6">
            <li>Home</li>
            <li>Job</li>
            <li>Browser</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="rounded-xl" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#950101] hover:bg-[#FF0000] rounded-xl">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex items-center gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        className="rounded-full w-9"
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <p className="font-medium">Harsika kumari</p>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <div className="flex flex-col text-gray-600">
                        <div className="flex w-fit items-center cursor-pointer">
                          <User />
                          <Button variant="link">View profile</Button>
                        </div>
                        <div className="flex w-fit items-center cursor-pointer">
                          <LogOut />
                          <Button variant="link">Logout</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
