import Navbar from "../shared/Navbar"
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import AdminJobsTable from "./AdminJobsTable"
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"
import { setSearchJobByText } from "../../redux/jobSlice"

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto my-10 max-w-6xl">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Search for Jobs"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate('/admin/Jobs/create')}>New Job</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs