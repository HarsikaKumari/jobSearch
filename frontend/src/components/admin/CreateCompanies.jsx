import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import axios from "axios"
import { COMPANY_API_END_POINT } from "../../utils/constants"
import { useState } from "react"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setSingleCompany } from '@/redux/companySlice'

function CreateCompanies() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [companyName, setCompanyName] = useState();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                },
            );
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-4xl">
                <div className="my-10">
                    <h1 className="font-bold text-2xl">Your Company Name</h1>
                    <p className="text-gray-500">Set your Company name, and you can change it later.</p>
                </div>

                <Label className="mt-5">Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="Eg. Wipro"
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-10">
                    <Button variant="outline" onClick={() => navigate('/admin/companies')}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Create Company</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateCompanies