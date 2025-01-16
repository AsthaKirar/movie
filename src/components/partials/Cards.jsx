import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div className='flex flex-wrap w-full '>
        {data.map((c,i) =><Link className='w-[25v] mr-[5%] mb-[5%]' key={i}>
        <img className= 'shadow-[8px_17px_38px_rgba(0,0,0,.5)] w-[40vh] object-cover' 
        src={`https://image.tmdb.org/t/p/original/
        ${c.backdrop_path || c.poster_path}`} 
        alt="" />
        <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'></h1>
        {c.name||
        c.title
        ||c.original_name|| 
            c.original_title}

        </Link>)}
    </div>
  )
}

export default Cards