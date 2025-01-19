import { createSlice } from '@reduxjs/toolkit'

const initialState = {
info:null,
};



export const tvshowsSlice = createSlice({
    name: 'tvshows',
    initialState,
    reducers: {

        loadtvshows:(state,action)=>{
            state.info = action.payload;
        },
        removtvshows:(state,action)=>{
            state.info = null;
        }

    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadtvshows,removeshows } = tvshowsSlice.actions
  
  export default tvshowsSlice.reducer
