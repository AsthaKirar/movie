import { useEffect , useState } from "react";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import Head from "./partials/Head";
import axios  from "../utils/axios";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";
import HorizontalCards from "./partials/HorizontalCards";
const Home = () => {
    document.title = "MovieApp"

    const [wallpaper,setwallpaper]=useState(null);
    const [trending,settrending]=useState(null);
    const[category,setcategory]=useState("all")
    const GetHeadWallpaper = async() =>{
      
      try{
        const {data} =await axios.get(`/trending/all/day`);
        console.log(data);
       let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata);

      }
      catch(error){
        console.log("Error: ",error);
      }
    }
console.log(trending)




    const GetTrending = async() =>{
      
      try{
        const { data } =await axios.get(`/trending/${category}/day`);
        console.log(data);
        settrending(data.results);

      }
      catch(error){
        console.log("Error: ",error);
      }
    
    }

    useEffect(() =>{
      GetTrending();
      !wallpaper && GetHeadWallpaper();
      

    },[category]);
    return wallpaper && trending ? (
      <>
        <SideNav />
        <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
          <Topnav />
          <Head data={wallpaper} />
                  <div className=' flex justify-between p-5'>
                  <h1 className=' text-3xl font-semibold text-zinc-400'>
                      Trending</h1>
                      <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setcategory(e.target.value)}/>
                  </div>
          
          <HorizontalCards data={trending} />
        </div>
      </>
    ) 
    : (
      <Loading/>
    );
    
};

export default Home;