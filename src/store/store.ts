import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "./githubUserSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    githubUser: githubUserReducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
