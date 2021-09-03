import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../../Components/Cards/Post Card/postCard";
import { loadPosts } from "../postsSlice";
import {loadFeed } from '../../Auth User/authUserSlice'
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";

export const TPostDisplay = ({ userId }) => {
  const postsState = useSelector((state) => state.postsData);
  const state = useSelector((state) => state.userData);
  const userFeed = useSelector(state => state.userData.userFeed)
  const dispatch = useDispatch();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadPosts(userId));
  
  }, [dispatch, state.token, userId]);

  return (
    <>
    <h1>All Posts</h1>
      {postsState.status === "success" && postsState.error === null ? (
        postsState.posts.map((post) => {
          return <PostCard post={post} />;
        })
      ) : (
        <h2>Not able to fetch posts</h2>
      )}
    </>
  );
};
