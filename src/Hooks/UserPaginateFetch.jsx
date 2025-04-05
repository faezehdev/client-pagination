import { useState,useEffect } from "react"
import _ from 'lodash'
const UserPaginateFetch = (url , pageSize)=>{
const [loading , setLoading] = useState(true)
const [data , setData] = useState([])
const getData = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results);
    const paginatedDate = _.chunk(data.results,pageSize)
    setData(paginatedDate)
    setLoading(false)
}
useEffect(() => {
    getData()
}, []);
return [data , loading ]
 }
 export default UserPaginateFetch