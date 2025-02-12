import React from 'react'
import { Link } from 'react-router-dom';

const Head = ({ data }) => {
    // console.log(data);
  return (
    <div 
    style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
    }}
    
    className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%] '
    >
        <h1 className='w-[70%] text-5xl font-black text-white'>
        {data.name||
        data.title
        ||data.original_name|| 
            data.original_title}
</h1>
<p className='w-[70%] text-white mb-3 mt-3'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link>

</p>
<p className='text-white flex gap-x-5'>
<i class=" text-yellow-500 ri-megaphone-fill"></i>{data.release_date||"No Information"}
<i class=" text-yellow-500 ri-album-fill"></i>{data.media_type.toUpperCase()}
</p>
<Link className='bg-[#6556CD] p-4 rounded font-semibold'>Watch Trailer</Link>
            </div>
  );
};

export default Head;



