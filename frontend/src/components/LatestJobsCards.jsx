// import React from 'react'

import { Badge } from "./ui/badge";

function LatestJobsCards() {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-bold text-lg">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">Job Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
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
    </div>
  );
}

export default LatestJobsCards;
