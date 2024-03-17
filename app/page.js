"use client"
import { Button } from "@/components/ui/button"
import Hero from "./_components/Hero"
import CategoryList from "./_components/CategoryList"
import GlobalApi from "./_service/GlobalApi"
import { useEffect, useState } from "react"
import BusinessLists from "./_components/BusinessList"
export default function Home() {

  const[categoryList,setCategoryList] = useState([]);
  const[businessLists,setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getBusinessList();
  }, [])
  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
      console.log(resp.categories)
    })
  }

const getBusinessList=()=>{
  GlobalApi.getBusinessList().then(resp=>{
    setBusinessList(resp.businessLists)
    console.log(resp.getBusinessList)
  })
}

  return <h1>
    <div>
      <Hero />

      <CategoryList categoryList={categoryList}/>
      <BusinessLists businessLists={businessLists}
      title={"Popular Business"}/>
    </div>
  </h1>
}
