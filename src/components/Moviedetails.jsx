// import {useState,useEffect} from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncloadmovie } from '../store/actions/movieAction';




// const Moviedetails = () => {

//   const dispatch = useDispatch();
//   const {id} = useParams();
//   useEffect(() =>{
//     dispatch(asyncloadmovie(id));

//   },[]);
//   return (
//     <div>Moviedetails</div>
//   )
// }

// export default Moviedetails



import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams
import { asyncloadmovie, removemovie } from '../store/actions/movieAction';

const Moviedetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
  // Add dependencies to the dependency array
 return()=>{
  dispatch(removemovie());
 };
},[]);
  return (
    <div>Moviedetails</div>
  );
};

export default Moviedetails;

