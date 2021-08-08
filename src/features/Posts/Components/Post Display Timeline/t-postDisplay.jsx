import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../../../Components/Cards/Post Card/postCard";
import { loadPosts } from "../../postsSlice";
import { setupAuthHeaderForServiceCalls } from "../../../Auth/util";

export const TPostDisplay = ({ userId }) => {
  const postsState = useSelector((state) => state.postsData);
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadPosts(userId));
  }, [dispatch, state.token, userId]);

  return (
    <>
      <h1>map on postcard</h1>
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
