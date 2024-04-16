import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription   } from '@/components/ui/sheet'
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from 'react'

function BookingSection({children}) {

    const [date,setDate]=useState(new Date())
    const getTime = () => {
      const timeList = [];
      for (let i = 10; i <= 12; i++) {
          timeList.push({
              time: i + ':00 AM'
          })
          timeList.push({
              time: i + ':30 AM'
          })
      }
      for (let i = 1; i <= 6; i++) {
          timeList.push({
              time: i + ':00 PM'
          })
          timeList.push({
              time: i + ':30 PM'
          })
      }

      setTimeSlot(timeList)
    }
  return (
    <div className=''>
        {children}
        <Sheet className="">
  <SheetTrigger>open</SheetTrigger>
  <SheetContent className='overflow-auto flex absolute inset-y-0 right-0 mt-9  p-10 bg-white rounded-t'  side={'right'} >
    <SheetHeader>
      <SheetTitle>Book an Service</SheetTitle>
      <SheetDescription>
      Select Date and Time slot to Book a service
      <div className='flex flex-col gap-5 items-baseline'>
        <h2>Select Date</h2>
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" flex mt-9 rounded-md border"
    />
      <div>
        Time Slot
      </div>
      </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default BookingSection