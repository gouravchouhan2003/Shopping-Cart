import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'

//Note:- configureStore() used to create a global/central storage of data
export const store = configureStore({  // store :- global storage
  reducer: {
      // list here all the slices
       cart: CartSlice
  },
})