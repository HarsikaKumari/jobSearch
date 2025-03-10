import Navbar from './shared/Navbar.jsx';
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Label } from './ui/label.jsx';
import { Contact, Mail, Pen } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AppliedJobsTable from './AppliedJobsTable.jsx';
import { useState } from 'react';
import UpdateProfileDialog from './UpdateProfileDialog.jsx';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '../hooks/useGetAppliedJobs.jsx';

const isResume = true;

function Profile() {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);

  return (

    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar>
              <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"> <Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-4 my-2'>
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-4 my-2'>
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className='my-5'>
          <h1 className='font-bold'>Skills</h1>
          <div className='flex items-center gap-2'>
            {
              user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((skill, index) => <Badge key={index}>{skill}</Badge>) : <p>No skills added</p>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a target='blank' className='text-blue-500 w-full hover-underline' href={user?.profile?.resume}>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold text-lg my-5'>Applied Job</h1>
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile;