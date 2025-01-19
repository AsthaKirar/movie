
import{Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import Tvshowsdetails from "./components/Tvshowsdetails";
import Peopledetails from "./components/Peopledetails";



 

const App = () => {
  return (
  
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/trending'element={<Trending/>}/>
        <Route path='/popular'element={<Popular/>}/>
        <Route path='/movie'element={<Movie/>}>
        <Route path="/movie/details/:id"
         element={<Moviedetails/>}/>
        </Route>
        <Route path='/tvshows'element={<Tvshows/>}>
        <Route path="/tvshows/details/:id"
         element={<Tvshowsdetails/>}/>



        </Route>
        <Route path='/people'element={<People/>}>{" "}
        <Route path="/people/details/:id"
         element={<Peopledetails/>}/>

        </Route>







      

        
      </Routes>
    </div>
  
  )
}

export default App