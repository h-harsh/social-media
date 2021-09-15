import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFriends } from "../otherUsersSlice";
import { UserListCard } from "../User List Card/userListCard";
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";
import { Spin } from "antd";

export const FollowingList = () => {
  const friendsState = useSelector((state) => state.friendsData);
  const state = useSelector((state) => state.userData);
  setupAuthHeaderForServiceCalls(state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFriends());
  }, [dispatch]);

  return (
    <div style={{height:'100vh'}}>
      {friendsState.following !== null
        ? friendsState.following.map((user) => {
            return <UserListCard user={user} />;
          })
        : <div className="loader-box">
        <Spin size="large" />
      </div>}
      {friendsState.following !== null && friendsState.following.length === 0 ? <div className="loader-box">
        No Following yet
      </div> : null }
    </div>
  );
};
