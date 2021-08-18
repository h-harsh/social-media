import "./userListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { followFriend, unfollowFriend } from "../friendsSlice";
import { loadAllUsers, loadFriends } from "../friendsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button } from "antd";

// so this component will create a link to new user timelien page
// Link tag will send user

export const UserListCardSmall = ({ user }) => {
  const friendsState = useSelector((state) => state.friendsData);
  const dispatch = useDispatch();
  const [idArray, setIdArray] = useState([]);
  const [temp, setTemp] = useState(true);

  useEffect(() => {
    dispatch(() => loadFriends());
    setIdArray(friendsState.following?.map((item) => item._id));
  }, [dispatch, friendsState.following]);

  return (
    <>
      <div className="user-card-box user-card-box-small">
        <div className="flex-cont">
        <Avatar size={60} style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}> A </Avatar>
        <div className="user-card-details">
          <Link to={`/timeline/${user._id}`}>
            <h2> {user.fullName}</h2>
          </Link>
          {/* <p> {user.followers.length + 1} Followers</p> */}
          <p> {user.following.length + 1} Following </p>
        </div>
        </div>

        <div>
          {idArray?.includes(user._id) ? (
            <Button
              onClick={() => {
                dispatch(unfollowFriend({ otherUserId: user._id }));
                setTemp(!temp);
              }}
            >
              Following
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                dispatch(followFriend({ otherUserId: user._id }));
                setTemp(!temp);
              }}
            >
              Follow
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export const UserListCard = ({ user }) => {
  const friendsState = useSelector((state) => state.friendsData);
  const dispatch = useDispatch();
  const [idArray, setIdArray] = useState([]);
  const [temp, setTemp] = useState(true);

  useEffect(() => {
    dispatch(() => loadFriends());
    setIdArray(friendsState.following?.map((item) => item._id));
  }, [dispatch, friendsState.following]);

  return (
    <>
      <div className="user-card-box">
        <div className="flex-cont">
        <Avatar size={70} style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}> A </Avatar>
        <div className="user-card-details">
          <Link to={`/timeline/${user._id}`}>
            <h2> {user.fullName}</h2>
          </Link>
          {/* <p> {user.followers.length + 1} Followers</p> */}
          <p> {user.following.length + 1} Following </p>
        </div>
        </div>

        <div>
          {idArray?.includes(user._id) ? (
            <Button
              onClick={() => {
                dispatch(unfollowFriend({ otherUserId: user._id }));
                setTemp(!temp);
              }}
            >
              Following
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                dispatch(followFriend({ otherUserId: user._id }));
                setTemp(!temp);
              }}
            >
              Follow
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
// export const UserListCard2 = ({ user }) => {
//   const friendsState = useSelector((state) => state.friendsData);
//   const dispatch = useDispatch();
//   const [idArray, setIdArray] = useState([]);
//   const [temp, setTemp] = useState(true);

//   useEffect(() => {
//     dispatch(() => loadFriends());
//     setIdArray(friendsState.following?.map((item) => item._id));
//   }, [dispatch, friendsState.following]);

//   return (
//     <>
//       <div>
//         <Link to={`/timeline/${user._id}`}>
//           <h3>Name {user.fullName}</h3>
//           <h4>Followers {user.followers.length + 1}</h4>
//           <h4>Following {user.following.length + 1} </h4>
//         </Link>
//         <div>
//           {idArray?.includes(user._id) ? (
//             <button
//               onClick={() => {
//                 dispatch(unfollowFriend({ otherUserId: user._id }));
//                 setTemp(!temp);
//               }}
//             >
//               Unfollow
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 dispatch(followFriend({ otherUserId: user._id }));
//                 setTemp(!temp);
//               }}
//             >
//               Follow
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
