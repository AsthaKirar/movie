export { removemovie } from "../reducers/movieSlice"
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";


export const asyncloadmovie = (id) => async(dispatch,getState)=>{
    try{
       const detail = await axios.get(`/movie/${id}`);
       const externalid = await axios.get(`/movie/${id}/external_ids`);
       const recommendation = await axios.get(`/movie/${id}/recommendation`);
       const similar = await axios.get(`/movie/${id}/similar`);
       const videos = await axios.get(`/movie/${id}/videos`);
       const watchprovider = await axios.get(`/movie/${id}/watchprovider`);
       let theultimatedetails ={
        detail:detail.data,
        externalid:externalid.data,
        recommendation:recommendation.results,
        similar:similar.results,
        videos:videos.data.results.find(m=>m.type === trailer),
        watchprovider:watchprovider.data.results.IN,

        
        

       }
       dispatch(loadmovie(theultimatedetails))

       console.log(theultimatedetails);



    }
    catch(error){
        console.log("Error ",error);
    }
};