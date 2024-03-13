import { Input } from '@/components/ui/input'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function Hero() {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>Find Home Service</h2>
        <h2 className='text-xl text-gray-400'>FExplore</h2>
<div className=' mt-4 flex gap-6'>
    <Input placeholder='Seach'
    className='rounded-full md:w[350px]'/>
    <Button className='rounded-full  h-[50px]'>
        <Search className='h-4 w-4'/>
    </Button>
</div>
    </div>
  )
}

export default Hero