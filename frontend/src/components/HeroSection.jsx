// import React from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

function HeroSection() {
    return (
        <div className="text-center">
            <div className="flex flex-col gap-7 my-10">
                <span className=" mx-auto px-4 py-2 rounded-full bg-gray-300 text-[#3D0000] ">No. 1 Job searching platform</span>
                <h1 className="text-5xl font-bold">Search, Apply & <br /> Get your <span className="text-[#3D0000]">Dream job</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
                <div className='flex w-[40%] items-center mx-auto shadow-lg border border-gray-200 pl-3 rounded-full'>
                    <input
                        type="text"
                        placeholder="Search for your dream job"
                        className="outline-none border-none w-full"
                    />
                    <Button>
                        <Search />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection