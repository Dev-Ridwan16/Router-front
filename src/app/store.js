import { configureStore } from "@reduxjs/toolkit"
import loaderSlice from "../feature/loader/loaderSlice"

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
  },
})
