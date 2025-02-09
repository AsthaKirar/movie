
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams
import { asyncloadmovie, removemovie } from '../store/actions/movieAction';

const Moviedetails = () => {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.movie)


  const { id } = useParams();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
  // Add dependencies to the dependency array
 return()=>{
  dispatch(removemovie());
 };
},[]);
  return info? (
    <div  style={{
      background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat"
  }}
    className='w-screen h-screen px-[10%]'>
      {/*part 1 navigation*/}
      <nav className= 'h-[10vh] w-full text-zinc-100 flex gap-10 items-center text-xl'>
      <Link
        onClick={()=>navigate(-1)}
className="hover:text-[#6556CD] ri-arrow-left-line"></Link>

<a  target='_blank' href=" {info.detail.homepage}"><i class="hover:text-white ri-external-link-line"></i></a>
<a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>

<i class="ri-earth-fill"></i>
</a>

<a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>



      </nav>

      {/*part 2 poster and details*/}
      <div className='w-full flex'>
      <img className= 'shadow-[8px_17px_38px_rgba(0,0,0,.5)] w-[40vh] object-cover' 
        src={`https://image.tmdb.org/t/p/original/
        ${info.backdrop_path || info.poster_path}`} 
        alt="" />


<div>

      <div className='mt-5'>
        { info.watchproviders && info.watchproviders.flatrate &&
        info.watchproviders.flatrate.map(w =>(
          <img className= 'w-[5vh] h-[5vh] object-cover rounded-md' 
          src={`https://image.tmdb.org/t/p/original/
          ${w.logo_path}`} 
          alt="" />
  
          
        ))}
          { info.watchproviders && info.watchproviders.rent &&
        info.watchproviders.rent.map(w =>(
          <img className= 'w-[5vh] h-[5vh] object-cover rounded-md' 
          src={`https://image.tmdb.org/t/p/original/
          ${w.logo_path}`} 
          alt="" />
  
          
        ))}
                  { info.watchproviders && info.watchproviders.buy &&
        info.watchproviders.buy.map(w =>(
          <img className= 'w-[5vh] h-[5vh] object-cover rounded-md' 
          src={`https://image.tmdb.org/t/p/original/
          ${w.logo_path}`} 
          alt="" />
  
          
        ))}

      </div>
      </div>

      </div>

    </div>
  ):(
    <Loading/>

  );
};


export default Moviedetails;

