import React from 'react'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate=useNavigate()
  return (
   <section className="flex flex-col items-center justify-center py-20 bg-gray-300">
    <p className="py-4">Oops! Page Not Found</p>
    <button className="rounded-lg px-4 py-2 bg-blue-950 text-white text-center"
    onClick={()=>{navigate("/")}}
    >Go to Homepage</button>
   </section>
  )
}

export default PageNotFound
