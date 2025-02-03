import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const filterData = [
  {
    filterType: "location",
    array: ['Delhi Ncr', 'Punjab', 'Mumbai', "Hyderabad"]
  },
  {
    filterType: "Job Type",
    array: ['Frontend developer', 'Backend Developer', 'FullStack Developer', 'Ml Engineer']
  },
  {
    filterType: "Salary",
    array: ['0-20K', '21-40K', '41K-1Lakh', '1Lakh+']
  },
]

function FilterCards() {
  return (
    <div className="w-full bg-white p-3 rounded-md shadow-md">
      <h1 className="font-bold text-lg">Filter Card</h1>
      <hr className="mt-3" />
      <div className="flex items-center space-x-2 my-2">
        <RadioGroup className="font-bold text-lg" defaultValue="option-one">
        {
          filterData.map((data, index)=>(
            <div key={index}>
              <h1>{data.filterType}</h1>
              {
                data.array.map((item, index)=>(
                  <div key={index}>
                    <RadioGroupItem value={item} id={item} />
                    <Label>{item}</Label>

                  </div>
                ))
              }
            </div>
          ))
        }
        </RadioGroup>

      </div>

    </div>
  )
}

export default FilterCards