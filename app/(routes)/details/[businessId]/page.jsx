"use client"
import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import GlobalApi from '@/app/_service/GlobalApi';
import BusinessInfo from '@/app/(routes)/_components/BusinessInfo'
import BusinessDescription from '@/app/(routes)/_components/BusinessDescription'
import SuggestedBusinessList from '@/app/(routes)/_components/SuggestedBusinessList'

function BusinessDetails({params}) {

    const {data,status}=useSession();
    const[business,setBusiness]=useState([])

    useEffect(()=>{
      params&&getbusinessById();
    },[params]);

    useEffect(()=>{
      checkUserAuth();
    });

    const getbusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
       setBusiness(resp.businessList);
      })
    }
    const checkUserAuth=()=>{
      if(status=='loading')
      {
          return <p>Loading...</p>
      }
      if(status=='unauthenticated')
      {
          signIn('descope');
      }
  
    }

   


  return status=='authenticated'&& (
    <div className='py-8 md:py-20 px-10 md:px-36'>

      <BusinessInfo business={business}/>

     <div className=' grid grid-cols-3 mt-16'>
      <div className='col-span-3 md:col-span-2 order-last md:order-first '>
      <BusinessDescription business={business}/>
      </div>
      <div className=' '>
        <SuggestedBusinessList business={business}/>

      </div>
     </div>



    </div>
  )
}

export default BusinessDetails