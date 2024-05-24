import { configureStore } from "@reduxjs/toolkit";

import SystemReducer from "./systemSlice";
export default configureStore({
  reducer: {
    system: SystemReducer,
  },
});
