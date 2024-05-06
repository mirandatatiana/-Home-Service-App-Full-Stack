import GlobalApi from '@/app/_service/GlobalApi'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { toast } from 'sonner'


function BookingHistoryList({bookingHistory}) {
  
  
  return (
    <div className='grid grid-cols-1 gap-2'>
        {bookingHistory.map((booking,index)=>(
          <div className='border 
          rounded-lg p-4 mb-5'>
            <div key={index} className='flex gap-4 '>
              {booking.businessList.name&&
              <Image src={booking.businessList.images[0].url}
                alt='image'
                width={120}
                height={120}
                className='rounded-lg object-cover'
                />}
                <div className='flex flex-col gap-2'>
                <h2 className='font-bold'>{booking.businessList.name}</h2>
                <h2 className='flex gap-2 text-cyan-600'> <User/> {booking.businessList.contactPerson}</h2>
                <h2 className='flex gap-2 text-gray-500'> <MapPin className='text-cyan-600'/> {booking.businessList.adress}</h2>
                <h2 className='flex gap-2 text-gray-500'>
                     <Calendar className='text-cyan-600'/> 
                    Service on : <span className='text-black'> {booking.date}</span></h2>
                    <h2 className='flex gap-2 text-gray-500'>
                     <Clock className='text-cyan-600'/> 
                    Service on : <span className='text-black'> {booking.time}</span></h2>
                            
                </div>
            </div>
           
{/* <AlertDialog>
  <AlertDialogTrigger asChild>
  <Button
          variant="outline"
             className="mt-5 w-full border-red-300 ">Cancel Appointment</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
      onClick={()=>cancelAppointment(booking)}
      >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog> */}

            </div>
        ))}
    </div>
  )
}

export default BookingHistoryList