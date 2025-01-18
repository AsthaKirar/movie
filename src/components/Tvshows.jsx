import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import Cards from './partials/Cards';


const Tvshows = () => {
    
        document.title = "MovieApp|Tvshows";
    
        const navigate = useNavigate ();
        const [category,setcategory] = useState("airing_today");
        const [tvshows,settvshows] = useState([]);
        const[page,setpage] = useState([])
        const [hasMore,sethasMore] =useState(true)
    
        const GetTvshows = async() =>{
          
            try{
              const { data } =await axios.get(`/tvshows/airing_today?page=${page}`);
              console.log(data);
              // settrending(data.results);
              if(data.results.length>0){
                settvshows((prevState)=>[...prevState,...data.results])
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
      if(movie.length === 0){
        GetTvshows()
      } else{
         setpage(1);
         settvshows([]);
         GetTvshows();
      }
    }
    
    
          useEffect(()=>{
            refreshHandler();
          },[category]);
    
  return tvshows.length>0? (
    <div className='px-[px-[5%] w-screen h-screen '>
    <div className='w-full flex items-center justify-between'>
        <h1 className=' text-2xl text-zinc-400 font-semibold'>
        <i 
        onClick={()=>navigate(-1)}
class="hover:text-[#6556CD] ri-arrow-left-line"></i> {" "}Tvshows <small className=" ml-2 text-sm text-zinc-600">({category})</small>
</h1>
<div className='flex items-center w-[80%]'>
<Topnav/>
<Dropdown title="category" 
options={["on_the_air",
    "popular",
    "top_rated",
    "airing_today"]}
func={(e)=> setcategory(e.target.value)}
/>
<div className='w-[2%]'></div>

</div>
    </div>

    <InfiniteScroll 
    dataLength={tvshows.length}
    next={GetTvshows}
    hasMore={hasMore}
    loader={<h1>Loading...</h1>}>

    <Cards data={tvshows} title={category}/>

    </InfiniteScroll>
</div>
):(
    <Loading/>
);

  
}

export default Tvshows