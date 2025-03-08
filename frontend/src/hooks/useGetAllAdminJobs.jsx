import axios from 'axios';
import { useEffect } from 'react'
import { JOB_API_END_POINT } from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import { setAllAdminJobs } from '../redux/jobSlice.js';

function useGetAllAdminJobs() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getAdminJob`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.job));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs