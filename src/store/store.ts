import { postsReducer } from "./posts.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { posts: postsReducer } });

export type RootState = ReturnType<typeof store.getState>;
