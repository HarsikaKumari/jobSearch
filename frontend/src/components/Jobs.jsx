import Navbar from './shared/Navbar.jsx'
import FilterCards from './FilterCards.jsx'
import Job from './Job.jsx';
import { useSelector } from 'react-redux';

function Jobs() {
  const { allJobs } = useSelector(store => store.job)
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-7'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <FilterCards />
          </div>
          {
            allJobs.length <= 0 ? <span>No Jobs Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                  {
                    allJobs.map((job) => (
                      <Job key={job._id} job={job}/>
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