import React from 'react'
import Dropdown from '../partials/Dropdown';
import { Link } from 'react-router-dom';

const HorizontalCards = ({data}) => {
  return (
        <div className='w-[100%] flex  overflow-y-hidden mb-5 p-5'>
            {data.map((d,i)=> <Link to={`/${d.media_type}/details/${d.id}`}
            key={i} className='min-w-[20%] bg-zinc-900 mr-5 mb-5'>
                <img className='w-full h-[55%] object-cover'
                 src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}
`} alt="" />

       <div className='text-white p-3 h-[45%]'>         
           <h1 className=' text-xl font-semibold '>
        {d.name||
            d.original_name|| 
            d.original_title||
            d.title}</h1>
<p className=' '
>{(d.overview ||'').slice(0,50)}...
<span className='text-blue-300'>more
</span>

</p>
</div>                        


            </Link>
            )}

        </div>

    
  );
};

export default HorizontalCards;
