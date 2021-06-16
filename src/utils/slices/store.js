import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "./temperature/weatherSlice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  devTools: process.env.NODE_ENV !== "production" ? true : false,
});
