import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'
import favouritesReducer from '../Slices/Favourites'

export const store = configureStore({
  reducer: {
    user: userReducer,
    favourites: favouritesReducer,
  },
})
