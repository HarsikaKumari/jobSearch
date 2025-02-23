import axios from 'axios';
import { useEffect } from 'react'
import { JOB_API_END_POINT } from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { setAllJobs } from '../redux/jobSlice.js';

function useGetAllJobs() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/job`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                    toast.success(res.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    }, [])
}

export default useGetAllJobs