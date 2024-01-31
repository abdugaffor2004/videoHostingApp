import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slices/videoSlice";
import tagsReducer from "./slices/tagsSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer
  }
});
