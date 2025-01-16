import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Loading from './Loading';


const Trending = () => {
    const navigate = useNavigate ();
    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState(null);


    const GetTrending = async() =>{
      
        try{
          const { data } =await axios.get(`/trending/${category}/${duration}`);
          console.log(data);
          settrending(data.results);
  
        }
        catch(error){
          console.log("Error: ",error);
        }
      
      }
      useEffect(()=>{
        GetTrending();
      },[category,duration]);
  

  return trending ? (
    <div className='px-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className='w-full bg-red-100 flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i 
            onClick={()=>navigate(-1)}
class="hover:text-[#6556CD] ri-arrow-left-line"></i>Trending
</h1>
<div className='flex items-center w-[80%]'>
<Topnav/>
<Dropdown title="category" 
options={["movie","tv","all"]}
func={(e)=> setcategory(e.target.value)}
/>
<div className='w-[2%]'></div>
<Dropdown title="duration" 
options={["week","day"]}
func={(e)=> setduration(e.target.value)

}
/>

</div>





        </div>
        <Cards data={trending} title={category}/>
    </div>
  ):(
    <Loading/>
  );
};

export default Trending;