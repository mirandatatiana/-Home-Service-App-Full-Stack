"use client"
import Image from "next/image"; 
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {

  const {data}=useSession();

  useEffect(()=>{
    console.log(data);
  },[data])


  return (
    <div className="p-5 shadow-sm flex"  >
      <div className="flex items-center gap-8" >
        <Image src="/logo.svg" alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden" >
          <h2 className="hover:scale-105 hover:text-purple-800">Home</h2>
          <h2 className="hover:scale-105 hover:text-purple-800">Service</h2>
          <h2 className="hover:scale-105 hover:text-purple-800">About us</h2>
        </div>
        <div>
          {data?.user?
         
          <DropdownMenu>
  <DropdownMenuTrigger > 
    <Image src={data?.user?.image}
          alt='user'
          width={40}
          height={40}
          className='rounded-full'
          /></DropdownMenuTrigger >
  <DropdownMenuContent className="bg-slate-200 ">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>My Booking</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          :
          <Button onClick={()=>signIn('descope')} className="p-5 bg-purple-300 rounded-lg">Login / Sign up</Button>
          }
        </div>
      </div>
    </div>
  );
}
export default Header;
