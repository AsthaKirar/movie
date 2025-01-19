import { configureStore } from '@reduxjs/toolkit';
import  movieReducer from './reducers/movieSlice';
import tvshowsReducer from './reducers/tvshowsSlice';
import peopleReducer from './reducers/peopleSlice';



export const store = configureStore({
  reducer: {
    movie:movieReducer,
    tvshows:tvshowsReducer,
    people:peopleReducer,
  },
})
