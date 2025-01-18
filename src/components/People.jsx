import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import Cards from './partials/Cards';

const People = () => {

    document.title = "MovieApp|People";
    
    const navigate = useNavigate ();
    const [category,setcategory] = useState("popular");
    const [people,setpeople] = useState([]);
    const[page,setpage] = useState([])
    const [hasMore,sethasMore] =useState(true)

    const GetPeople = async() =>{
      
        try{
          const { data } =await axios.get(`/people/popular?page=${page}`);
          console.log(data);
          // settrending(data.results);
          if(data.results.length>0){
            setpeople((prevState)=>[...prevState,...data.results])
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
  if(people.length === 0){
    GetPeople()
  } else{
     setpage(1);
     setpeople([]);
     GetPeople();
  }
}


      useEffect(()=>{
        refreshHandler();
      },[category]);


  return people.length>0?(
    <div className='px-[px-[5%] w-screen h-screen '>
    <div className='w-full flex items-center justify-between'>
        <h1 className=' text-2xl text-zinc-400 font-semibold'>
        <i 
        onClick={()=>navigate(-1)}
class="hover:text-[#6556CD] ri-arrow-left-line"></i> {" "}People <small className=" ml-2 text-sm text-zinc-600">({category})</small>
</h1>
<div className='flex items-center w-[80%]'>
<Topnav/>
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

  )
}

export default People