import Navbar from './shared/Navbar.jsx'
import FilterCards from './FilterCards.jsx'
import Job from './Job.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setSearchedQuery } from '../redux/jobSlice.js';

function Jobs() {
  const { allJobs, searchedQuery } = useSelector(store => store.job)
  const [filterJob, setFilterJob] = useState(allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchedQuery) {
      const filteredJob = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase())
      });
      setFilterJob(filteredJob)
    } else {
      setFilterJob(allJobs)
    }
  }, [allJobs, searchedQuery])

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""))
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-7'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <FilterCards />
          </div>
          {
            filterJob.length <= 0 ? <span>No Jobs Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                  {
                    filterJob.map((job) => (
                      <Job key={job._id} job={job} />
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>

      </div>

    </div>
  )
}

export default Jobs