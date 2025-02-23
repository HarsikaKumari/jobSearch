import LatestJobsCards from "./LatestJobsCards";

function LatestJobs() {
    const JobNumber = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-4xl font-bold "> <span className="text-[#3D0000]">Latest & Top </span>Job Opening</h1>
            <div className="grid grid-cols-3 mx-auto my-20 gap-5">
                {
                    JobNumber.slice(0, 6).map((job, index) =>
                        <LatestJobsCards />
                    )
                }
            </div>

        </div>
    )
}

export default LatestJobs