import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsers } from "../friendsSlice";
import { UserListCard } from "../User List Card/userListCard";
import { setupAuthHeaderForServiceCalls } from "../../Auth/util";

export const AllUsersList = () => {
  const allUsersData = useSelector((state) => state.friendsData.allUsers);
  const state = useSelector((state) => state.userData);
  setupAuthHeaderForServiceCalls(state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsers("psaram"));
  }, [dispatch]);

  // console.log(allUsersData);
  return (
    <>
      <h1>All uzer</h1>
      {allUsersData !== null
        ? allUsersData.map((user) => {
            return <UserListCard user={user} />;
          })
        : null}
    </>
  );
};
