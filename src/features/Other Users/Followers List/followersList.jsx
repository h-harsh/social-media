import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFriends } from "../otherUsersSlice";
import { UserListCard } from "../User List Card/userListCard";
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";

export const FollowersList = () => {
  const friendsState = useSelector((state) => state.friendsData);
  const state = useSelector((state) => state.userData);
  setupAuthHeaderForServiceCalls(state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFriends());
  }, [dispatch]);

  return (
    <>
      <h3>Map on all Followers</h3>
      {friendsState.followers !== null
        ? friendsState.followers.map((user) => {
            return <UserListCard user={user} />;
          })
        : null}
    </>
  );
};
