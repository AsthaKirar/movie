import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { asyncloadmovie } from '../store/actions/movieAction';




const Moviedetails = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() =>{
    dispatch(asyncloadmovie(id));

  },[]);
  return (
    <div>Moviedetails</div>
  )
}

export default Moviedetails