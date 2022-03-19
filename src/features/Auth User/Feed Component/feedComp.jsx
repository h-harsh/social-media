/*eslint-disable */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "../authUserSlice";
import { setupAuthHeaderForServiceCalls } from "../util";
import { PostCard } from "../../../Components/Cards/Post Card/postCard";
import { Spin } from 'antd';

export const FeedComp = () => {
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();


  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadFeed("hara"));
  }, [dispatch]);

  return (
    <div id="hello">
      {state.userFeed === null ? (
        <div className="loader-box">
          <Spin size="large" />
        </div>
      ) : (
        state.userFeed.map((post) => {
          return (
            <div key={post.createdAt} >
              <PostCard post={post} feed />
            </div>
          );
        })
      )}

    </div>
  );
};
