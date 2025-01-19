
import axios from '../../utils/axios'
import  { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '../../public/no image.png'



const Topnav = () => {

    const [query,setquery]=useState("");
    const [searches,setsearches]=useState([])
    const GetSerches = async()=>{
      try{
        const {data} =await axios.get(`/search/multi?query=${query}`);
        console.log(data);
        setsearches(data.results);
      }
      catch(error){
        console.log("Error: ",error);
      }
    };
    useEffect(()=>{
      GetSerches();
    },[query]);
  
  return (
    <div className='w-[80%] h-[10vh]  relative flex mx-auto items-center '>
        <i class="text-zinc-400 text-2xl ri-search-line"></i>
        <input
        onChange={(e)=>setquery(e.target.value)}
        value={query}
         className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200' type="text"placeholder='search anything' />
         {query.length>0 &&(

        <i onClick={()=>setquery("")}
         className=" text-zinc-400 text-2xl ri-close-line "
         ></i>
      )}

    
        <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] left-[20%] overflow-auto'>
          {searches.map((s,i)=>(
                          <Link key={i}
                          className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10  bg-zinc-200  flex justify-center border-zinc-100'>
            <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 shodow-lg'
            src= {
              s.backdrop_path||s.profile_path?
              `https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path} `:noimage}

              alt="" />
            <span>{s.name||
            s.original_name|| 
            s.original_title}
            </span>
            </Link> 


          ))}




        </div>
    </div>
  )
}

export default Topnav