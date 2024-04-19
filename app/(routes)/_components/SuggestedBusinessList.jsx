import { Notebook, NotebookPen } from 'lucide-react'
import React, {useEffect,useState} from 'react'
import { Button } from "@/components/ui/button";
import GlobalApi from '@/app/_service/GlobalApi';
import Image from 'next/image'
import Link from "next/link";
import BookingSection from '@/app/(routes)/_components/BookingSection';


function SuggestedBusinessList({bussines}) {

  const[businessLists,setBusinessList]=useState([]);
  useEffect(()=>{
    bussines&&getBusinessList()

  },[bussines]);

  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(bussines?.category?.name)
    .then(resp=>{
      setBusinessList(resp?.businessLists);
    })
  }



  return (
    <div className='md:pl-10'>

      <BookingSection business={bussines}>
         <Button className="flex gap-2 w-full" >
          <NotebookPen/>
          Book Appointment
         </Button>
      </BookingSection>
      <div className=' hidden md:block'>
      <h2 className='font-bold text-lg mt-3 mb-4'>Similar Business</h2>
      <div className='hover:border border-primary'>
      {businessLists&&businessLists.map((business, index)=>
      <Link href={'/details/'+business.id} className='flex gap-2 mb-4 hover:border border-primary rounded-lg p-2 cursor-pointer' >
      <Image src={business?.images[0].url}
      alt={business.name}
      width={80}
      height={80}
      className='rounded-lg object-cover'
      />
      <div className='mb-'>
        <h2 className='font-bold'>{business.name}</h2>
        <h2 className='text-primary'>{business.contactPerson}</h2>
        <h2 className='text-gray-400'>{business.addres}</h2>

        </div>
      </Link>
      )}
      </div>
      </div>
    </div>
  )
}

export default SuggestedBusinessList