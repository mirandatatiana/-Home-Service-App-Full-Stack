"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_service/GlobalApi';
import BusinessLists from "@/app/_components/BusinessList.jsx"

function BusinessByCategory({params}) {

const[businessLists,setBusinessList]=useState([]);
  useEffect(()=>{
    console.log(params);
    params&&getBusinessList()

  },[params]);

  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(params.category)
    .then(resp=>{
      setBusinessList(resp?.businessLists);
    })
  }




  return (
    <div>
    <BusinessLists  businessLists={businessLists}
     />
    </div>
  )
}

export default BusinessByCategory