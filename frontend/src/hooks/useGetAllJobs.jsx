import axios from 'axios';
import { useEffect } from 'react'
import { JOB_API_END_POINT } from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux';
import { setAllJobs } from '../redux/jobSlice.js';

function useGetAllJobs() {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store => store.job)

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/job?keyword=${searchedQuery}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.job));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    }, [])
}

export default useGetAllJobs