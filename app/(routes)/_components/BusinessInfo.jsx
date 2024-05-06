import React from 'react'
import Image from 'next/image'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import { Button } from "@/components/ui/button";

function BusinessInfo({business}) {
  return business?.name&&(
    <div className='flex gap-4 items-center md:flex flex-col'>
      <Image src={business?.images[0]?.url}
      alt={business.name}
      width={150}
      height={200}
      className='rounded-full h-[150px] object-cover'/>
      <div className='flex justify-between items-center w-full gap-5 mt-2'>
      <div className='md:flex flex-col mt-4 md:mt-0 items-baseline gap-3'>
      <h2 className='p-1 px-3 text-lg bg-cyan-950 text-gray-200 rounded-full'>{business?.category?.name}</h2>
      <h2 className='text-[40px] font-bold mt-2'>{business.name}</h2>
      <h2 className='flex gap-2 text-lg text-gray-500'><MapPin/>{business?.adress}</h2>
      </div>
      <div className='flex flex-col gap-5 item-end'>
        <h2 className='flex gap-5 text-xl text-cyan-600'><User/>{business.contactPerson} </h2>
        <h2 className='flex gap-5 text-xl text-gray-500'><Clock/>Available 8:00 to 10:00 pm</h2>

      </div>
      </div>



    </div>
  )
}

export default BusinessInfo