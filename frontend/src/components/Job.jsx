import { Bookmark } from 'lucide-react'
import { Button } from './ui/button.jsx'
import { Avatar, AvatarImage } from './ui/avatar.jsx'
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const Job = (props) => {
  const { job } = props;
  const navigate = useNavigate();
  const calcDateFunction = (mongoTime) => {
    const createdAt = new Date(mongoTime);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>{calcDateFunction(job?.createdAt) === 0 ? "Today" : `${calcDateFunction(job?.createdAt)} days ago`}</p>
        <Button classname="rounded-full" variant="outline" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <div className='font-bold text-lg my-2'>{job?.title}</div>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          10 positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          part time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          12Lpa
        </Badge>
      </div>

      <div className='flex items-center gap-4 my-3'>
        <Button variant="outline" onClick={() => navigate(`/description/${job._id}`)}>Details</Button>
        <Button className="bg-purple-700">Save for later </Button>
      </div>
    </div>
  )
}

Job.propTypes = {
  job: PropTypes.any
}
export default Job