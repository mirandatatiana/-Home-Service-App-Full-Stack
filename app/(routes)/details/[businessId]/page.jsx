"use client"
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import GlobalApi from '@/app/_service/GlobalApi';
import BusinessInfo from '@/app/(routes)/_components/BusinessInfo'
function BusinessDetails({params}) {

    const {data,status}=useSession();
    const[business,SetBusiness]=useState([])

    useEffect(()=>{
      params&&getbusinessById();
    },[params]);

    useEffect(()=>{
      checkUserAuth();
    });

    const getbusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
       SetBusiness(resp.businessList);
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



    </div>
  )
}

export default BusinessDetails