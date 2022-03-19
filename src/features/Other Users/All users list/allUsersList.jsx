import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsers, loadFriends } from "../otherUsersSlice";
import {
  UserListCard,
  UserListCardSmall,
} from "../User List Card/userListCard";
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";
import { LoaderSimple } from "../../../New Components";

export const AllUsersList = () => {
  const allUsersData = useSelector((state) => state.friendsData.allUsers);
  const state = useSelector((state) => state.userData);
  setupAuthHeaderForServiceCalls(state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsers("psaram"));
    dispatch(loadFriends());
  }, [dispatch]);

  // console.log(allUsersData);
  return (
    <div style={{ height: "100vh" }}>
      {allUsersData !== null ? (
        allUsersData.map((user) => {
          return <UserListCard user={user} />;
        })
      ) : (
        <div className="loader-box">
          <LoaderSimple size={50} />
        </div>
      )}
    </div>
  );
};
export const AllUsersListSideBar = () => {
  const allUsersData = useSelector((state) => state.friendsData.allUsers);
  const state = useSelector((state) => state.userData);
  setupAuthHeaderForServiceCalls(state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsers("psaram"));
    dispatch(loadFriends());
  }, [dispatch]);

  // console.log(allUsersData);
  
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ marginLeft: "1.5rem" }}>People you may know</h1>
      {
      allUsersData !== null ? (
        <div>
          {allUsersData.map((user) => {
          return <UserListCardSmall user={user} />;
        })}
        </div>
      ) : (
        <div className="loader-box">
          <LoaderSimple size={40} />
        </div>
      )}
    </div>
  );
};
