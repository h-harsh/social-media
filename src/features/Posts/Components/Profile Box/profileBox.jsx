import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAuthHeaderForServiceCalls } from "../../../Auth/util";
import { loadOtherUser } from "../../postsSlice";

export const ProfileBox = ({ userId }) => {
  const state = useSelector((state) => state.userData);
  const user = useSelector((state) => state.postsData.otherUser);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadOtherUser(userId));
  }, [dispatch, userId, state.token]);

  return (
    <div>
      {user !== null ? (
        <h2>rEAL NAME Profile box : {user.fullName}</h2>
      ) : (
        <h2>Loadingsss</h2>
      )}
    </div>
  );
};
export const ProfileBoxSelf = ({ user }) => {
  const state = useSelector((state) => state.userData);
  //   const user = useSelector((state) => state.postsData.otherUser);
  //   const dispatch = useDispatch();
  console.log(user);
  //   useEffect(() => {
  //     setupAuthHeaderForServiceCalls(state.token);
  //     dispatch(loadOtherUser(userId));
  //   }, [dispatch,  userId, state.token]);

  return (
    <div>
      {state.currentUser !== null ? (
        <h2>Full Name from user : {user.fullName} || Full name from state.userdata {state.currentUser.fullname}  </h2>
      ) : (
        <h2>Loadingsss</h2>
      )}
    </div>
  );
};
