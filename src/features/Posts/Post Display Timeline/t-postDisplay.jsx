import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../../Components/Cards/Post Card/postCard";
import { loadPosts } from "../postsSlice";
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";

export const TPostDisplay = ({ userId, self }) => {
  const postsState = useSelector((state) => state.postsData);
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadPosts(userId));
  
  }, [dispatch, state.token, userId]);

  return (
    <>
    {/* <h1>All Posts</h1> */}
      {postsState.status === "success" && postsState.error === null ? (
        postsState.posts.map((post) => {
          return <PostCard post={post} self={self ? true : false} />;
        })
      ) : (
        <h2>Not able to fetch posts</h2>
      )}
    </>
  );
};
