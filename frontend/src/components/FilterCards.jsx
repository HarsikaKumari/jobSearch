import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice.js'

const filterData = [
  {
    filterType: "location",
    array: ["Delhi Ncr", "Punjab", "Mumbai", "Hyderabad", "Pune"],
  },
  {
    filterType: "Job Type",
    array: [
      "Frontend developer",
      "Backend Developer",
      "FullStack Developer",
      "Ml Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-20K", "21-40K", "41K-1Lakh", "1Lakh+"],
  },
];

function FilterCards() {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue])
  
  return (
    <div className="w-full bg-white p-3 rounded-md shadow-md">
      <h1 className="font-bold text-lg">Filter Card</h1>
      <hr className="mt-3" />
      <div className="flex items-center space-x-2 my-2">
        <RadioGroup
          value={selectedValue}
          onValueChange={changeHandler}
          className="font-bold text-lg"
          defaultValue="option-one"
        >
          {filterData.map((data, index) => (
            <div key={index}>
              <h1>{data.filterType}</h1>
              {data.array.map((item, idx) => {
                const itemId = `id${index}` - `${idx}`;
                return (
                  <div key={index}>
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId} >{item}</Label>
                  </div>
                );
              })}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default FilterCards;
