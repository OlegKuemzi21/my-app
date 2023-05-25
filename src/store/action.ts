import { useDispatch } from "react-redux";
import { postsAction } from "./posts.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...postsAction,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
