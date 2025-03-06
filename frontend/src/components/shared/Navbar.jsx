import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constants";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error(error);
    }
  };
  return (
    <div className="bg-white px-6">
      <div className="flex items-center justify-between m-6">
        <h1 className="text-2xl font-bold">
          Job <span className="text-[#3D0000]"> Portal </span>
        </h1>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium text-center gap-6">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  {" "}
                  <Link to="/admin/companies"> Companies </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/admin/jobs"> Job </Link>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link to="/"> Home </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/jobs"> Job </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/browse"> Browser </Link>{" "}
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="rounded-xl" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className=" text-white bg-[#950101] hover:bg-[#FF0000] rounded-xl">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
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
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <p className="font-medium">{user?.fullname}</p>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                      <div className="flex flex-col text-gray-600">
                        {user && user.role === "student" && (
                          <div className="flex w-fit items-center cursor-pointer">
                            <User />
                            <Button variant="link">
                              {" "}
                              <Link to="/profile"> View profile </Link>
                            </Button>
                          </div>
                        )}
                        <div className="flex w-fit items-center cursor-pointer">
                          <LogOut />
                          <Button onClick={logoutHandler} variant="link">
                            Logout
                          </Button>
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
