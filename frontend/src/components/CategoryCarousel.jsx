import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

function CategoryCarousel() {
    const categories = [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "DevOps Engineer",
        "UI/UX Designer",
        "Data Scientist",
        "Machine Learning Engineer",
        "QA Engineer",
        "Mobile App Developer",
    ];

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        categories.map((category, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                                <Button className="rounded-xl text-white bg-[#911b1b] hover:bg-[#FF0000]" variant="outline">{category}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
}

export default CategoryCarousel;