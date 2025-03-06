import Navbar from "../shared/Navbar"
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import CompaniesTable from "./CompaniesTable"
import { useNavigate } from "react-router-dom"

const Companies = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className="mx-auto my-10 max-w-6xl">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="Search for companies" />
                    <Button onClick={() => navigate('/admin/companies/create')} >New Company</Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    )
}

export default Companies