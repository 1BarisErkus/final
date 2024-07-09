import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
  },
});

export default store;
