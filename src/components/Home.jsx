import { useEffect , useState } from "react";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import Head from "./partials/Head";
import axios  from "../utils/axios";
const Home = () => {
    document.title = "MovieApp"

    const [wallpaper,setwallpaper]=useState(null);
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
    useEffect(() =>{
      !wallpaper && GetHeadWallpaper();

    },[]);
    return wallpaper ? (
      <>
        <SideNav />
        <div className="w-[80%] h-full">
          <Topnav />
          <Head data={wallpaper} />
        </div>
      </>
    ) : (
      <h1>Loading</h1>
    );
    
};

export default Home;