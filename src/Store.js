import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice/CounterSlice";

export default configureStore({
  reducer: {
    Counter: slice,
  },
});
