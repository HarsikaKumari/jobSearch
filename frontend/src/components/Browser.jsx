import Navbar from './shared/Navbar.jsx'
import Job from './Job.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setSearchedQuery } from '../redux/jobSlice.js'
import useGetAllJobs from '../hooks/useGetAllJobs.jsx'

function Browser() {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job)
  
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""))
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-lg'>Search Result({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          {
            allJobs.map((job) => {
              return (
                <Job key={job} job={job} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browser