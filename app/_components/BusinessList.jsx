import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function BusinessList({ businessLists, title }) {
  return (
    <div className="mt-10 pt-10">
      <h2 className="font-bold text-[22px]"></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {businessLists.length > 0
          ? businessLists.map((business, index) => (
              <Link href={'/details/'+business.id}
                className="shadow-sm rounded-lg hover:shadow-sm hover:shadow-slate-500 hover:scale-105 transition-all ease-in-out"
                key={index}
              >
                <Image
                  src={business?.images[0].url}
                  alt={business.name}
                  width={600}
                  height={200}
                  className="h-[200px] md:h-[600px] object-cover rounded-lg"
                />
                <div className=" flex flex-col items-baseline p-3">
                  <h2 className="p-1 bg-cyan-950 text-gray-200 rounded-full px-2 text-[12px]">
                    {business.category.name}
                  </h2>
                  <h2 className="font-bold text-lg">{business.name}</h2>
                  <h2 className="text-cyan-600">{business.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{business.adress}</h2>
                  <Button className=" rounded-lg bg-cyan-800 p-2 gap-2 mt-3">
                    Book Now
                  </Button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
}

export default BusinessList;
