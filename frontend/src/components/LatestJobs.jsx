import { useSelector } from "react-redux";
import LatestJobsCards from "./LatestJobsCards";

function LatestJobs() {
    const { allJobs } = useSelector(store => store.job)

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-4xl font-bold "> <span className="text-[#3D0000]">Latest & Top </span>Job Opening</h1>
            <div className="grid grid-cols-3 mx-auto my-20 gap-5">
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0, 6).map((job) => <LatestJobsCards key={job._id} job={job} />)
                }
            </div>

        </div>
    )
}

export default LatestJobs