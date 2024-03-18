const { gql, default: request } = require("graphql-request")

const MASTER_URL= 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const getCategory=async()=>{
    const query=gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
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
      email
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

export default {
    getCategory,
    getBusinessList
}