import Link from "next/link";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
function CategoryList({ categoryList }) {
  return (

  
    <Carousel >
     <CarouselContent>
   
    <CarouselItem className="flex justify-center items-center  gap-6 "> 
      {categoryList.length > 0
        ? categoryList.map((category, index) => (
            <Link href={'/search/'+category.name} 
              key={index}
              className={`flex flex-col items-center justify-center gap-2  bg-cyan-800 p-5 rounded-lg
            cursor-pointer hover:scale-110 transition-all ease-in-out`}
            >
              {/* <Image
                src={category.icon.url}
                alt="icon"
                width={35}
                height={35}
              /> */}
              <h2 className="text-gray-200">{category.name}</h2>
            </Link>
          ))
        : [1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
   
  </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  
  
  );
}

export default CategoryList;

