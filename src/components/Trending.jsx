import  { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';



const Trending = () => {
  document.title = "MovieApp|Trending";

    const navigate = useNavigate ();
    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState([]);
    const[page,setpage] = useState([]);
    const [hasMore,sethasMore] =useState(true);

    const GetTrending = async() =>{
      
        try{
          const { data } =await axios.get(`/trending/${category}/${duration}?page=${page}`);
          console.log(data);
          // settrending(data.results);
          if(data.results.length>0){
            settrending((prevState)=>[...prevState,...data.results])
            setpage(page + 1);
  

          }  
          else{
            sethasMore(false);

          }
  
        }
        catch(error){
          console.log("Error: ",error);
        }
      
      }
const refreshHandler = async() =>{
  if(trending.length === 0){
    GetTrending()
  } else{
     setpage(1);
     settrending([]);
     GetTrending();
  }
}


      useEffect(()=>{
        refreshHandler();
      },[category,duration]);
  

  return trending.length>0 ? (
    <div className='px-[px-[5%] w-screen h-screen '>
        <div className='w-full flex items-center justify-between'>
            <h1 className=' text-2xl text-zinc-400 font-semibold'>
            <i 
            onClick={()=>navigate(-1)}
class="hover:text-[#6556CD] ri-arrow-left-line"></i> {" "}Trending
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

        <InfiniteScroll 
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}>

        <Cards data={trending} title={category}/>

        </InfiniteScroll>
    </div>
  ):(
    <Loading/>
  );
};

export default Trending;