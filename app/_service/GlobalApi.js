const { gql, default: request } = require("graphql-request")

const MASTER_URL= 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'
//Endpoints
const getCategory=async()=>{
    const query=gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
      }
    }`

      const result=await request(MASTER_URL,query)
      return result
}

const getBusinessList=async()=>{
  const query=gql`
  query BusinessList {
    businessLists {
      about
      adress
      category {
        name
      }
      contactPerson
      images {
        url
      }
      id
      name
    }
  }
 `
  const result=await request(MASTER_URL,query)
  return result
}

const getBusinessByCategory= async(category)=>{
  const query=gql`
  query MyQuery {
    businessLists(where: {category: {name: "`+category+`"}}) {
      about
      adress
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL,query)
  return result
}

const getBusinessById=async(id)=>{
  const query=gql`
  query GetBusinessById {
    businessList(where: {id: "`+id+`"}) {
      about
      adress
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL,query)
  return result
}

const createNewBooking=async(businessId,date,time,userMail,userName)=>{
  const mutationQuery=gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: Booked,
         businessList: {connect: {id: "`+businessId+`"}}, 
         date: "`+date+`", time: "`+time+`",
          userMail: "`+userMail+`",
           userName: "`+userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
     }
    }  
  `
  const result=await request(MASTER_URL,mutationQuery)
  return result
}
const BusinessBookedSlot=async(businessId,date)=>{
  const query=gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: {id: "`+businessId+`"},
     date: "`+date+`"}) {
      date
      time
    }
  }
  `
  const result=await request(MASTER_URL,query)
  return result
}
  
const GetUserBookingHistory=async(userMail)=>{
  const query=gql`
  query GetUserBookingHistory {
    bookings(where: {userMail: "`+userMail+`"}, orderBy: date_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        adress
      }
      date
      time
    }
  }
  `
  const result=await request(MASTER_URL,query)
  return result
}



export default {
    getCategory,
    getBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    BusinessBookedSlot,
    GetUserBookingHistory,
}