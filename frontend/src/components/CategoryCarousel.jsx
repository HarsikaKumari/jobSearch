import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";

function CategoryCarousel() {
  const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "ML Engineer",
    "QA Engineer",
    "Mobile App Developer",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchHandler = (query) => {
    dispatch(setSearchedQuery(query));
      navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <Button
                onClick={() => searchHandler(category)}
                className="rounded-xl"
                variant="outline"
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
