import Navbar from './shared/Navbar.jsx'
import Job from './Job.jsx'

const randomJobs = [1, 2, 3, 4, 5, 6, 7];

function Browser() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-lg'>Search Result({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          {
            randomJobs.map((job, index) => {
              return (
                <Job key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browser