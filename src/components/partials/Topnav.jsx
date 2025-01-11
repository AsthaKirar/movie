import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const [query,setquery]=useState("");
    console.log(query);
  return (
    <div className='w-full h-[10vh]  relative flex justify-start  items-center ml-[20%]'>
        <i class="text-zinc-400 text-2xl ri-search-line"></i>
        <input
        onChange={(e)=>setquery(e.target.value)}
        value={query}
         className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200' type="text"placeholder='search anything' />
         {query.length>0 &&(

        <i onClick={()=>setquery("")}
         class=" text-zinc-400 text-2xl ri-close-line"
         ></i>
      )}

    
        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto'>

             {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10  bg-zinc-200  flex justify-center border-zinc-100'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link> */}




        </div>
    </div>
  )
}

export default Topnav