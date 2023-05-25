import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const LS_POS_KEY = "rfc";

interface PostsState {
  posts: string[];
}

const initialState: PostsState = {
  posts: JSON.parse(localStorage.getItem(LS_POS_KEY) ?? "[]"),
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<string>) {
      state.posts.push(action.payload);
      localStorage.setItem(LS_POS_KEY, JSON.stringify(state.posts));
    },
    removePosts(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((f) => f !== action.payload);
      localStorage.setItem(LS_POS_KEY, JSON.stringify(state.posts));
    },
  },
});

export const postsAction = PostsSlice.actions;
export const postsReducer = PostsSlice.reducer;
