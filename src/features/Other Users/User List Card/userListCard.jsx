import "./userListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { followFriend, unfollowFriend } from "../otherUsersSlice";
import {  loadFriends } from "../otherUsersSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { baseurl } from "../../../utils/baseurl";

// so this component will create a link to new user timelien page
// Link tag will send user
/*  */

export const UserListCardSmall = ({ user }) => {
  const friendsState = useSelector((state) => state.friendsData);
  const dispatch = useDispatch();
  const [idArray, setIdArray] = useState([]);
  const [temp, setTemp] = useState(true);

  useEffect(() => {
    dispatch(() => loadFriends());
    setIdArray(friendsState.following?.map((item) => item._id));
  }, [dispatch, friendsState.following]);

  // useEffect(() => {
  //   dispatch(() => loadFriends());
  // }, [])
  console.log("hello", idArray)

  return (
    <>
      <div className="user-card-box user-card-box-small only-card">
        <div className="flex-cont">
          {user.profilePicture ? (
            <Avatar size={60} src={`${baseurl}/${user.profilePicture}`} />
          ) : (
            <Avatar size={60} icon={<UserOutlined />} />
          )}

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
  const [idArray, setIdArray] = useState([]);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState(true);

  useEffect(() => {
    dispatch(() => loadFriends());
    setIdArray(friendsState.following?.map((item) => item._id));
  }, [dispatch, friendsState.following]);

  if( idArray === undefined || idArray.length === 0){
    dispatch(() => loadFriends());
  }

  return (
    <>
      <div className="user-card-box">
        <div className="flex-cont">
        {user.profilePicture ? (
            <Avatar size={70} src={`${baseurl}/${user.profilePicture}`} />
          ) : (
            <Avatar size={70} icon={<UserOutlined />} />
          )}
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
