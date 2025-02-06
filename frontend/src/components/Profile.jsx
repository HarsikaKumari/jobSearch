import Navbar from './shared/Navbar.jsx';
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Label } from './ui/label.jsx';
import { Contact, Mail, Pen } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AppliedJobsTable from './AppliedJobsTable.jsx';
import { useState } from 'react';
import UpdateProfileDialog from './UpdateProfileDialog.jsx';

const skillArray = ["React", "Java", "JavaScript", "Python", "Cloud Computing"];
const isResume = true;

function Profile() {
  const [open, setOpen] = useState(false);
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
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right" variant="outline"> <Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-4 my-2'>
            <Mail />
            <span>hello@gmail.com</span>
          </div>
          <div className='flex items-center gap-4 my-2'>
            <Contact />
            <span>82748638728</span>
          </div>
        </div>
        <div className='my-5'>
          <h1 className='font-bold'>Skills</h1>
          <div className='flex items-center gap-2'>
            {
              skillArray.length !== 0 ? skillArray.map((skill, index) => <Badge className="bg-black text-[white] hover:bg-black hover:text-white" key={index}>{skill}</Badge>) : <p>No skills added</p>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a target='blank' className='text-blue-500 w-full hover-underline' href='https://www.linkedin.com/in/harsika-kumari/'>Harsika kumari</a> : <span>NA</span>
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