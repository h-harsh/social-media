import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "../authSlice";
import { setupAuthHeaderForServiceCalls } from "../util";
import { PostCard } from "../../../Components/Cards/Post Card/postCard";

export const FeedComp = () => {
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  console.log(state.userFeed);

  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadFeed("hara"));
  }, [dispatch]);

  return (
    <>
      <h1>Map kardo new route p ebas </h1>

      {state.userFeed === null ? (
        <h1>Error</h1>
      ) : (
        state.userFeed.map((post) => {
          return <PostCard post={post} />;
        })
      )}

    </>
  );
};
