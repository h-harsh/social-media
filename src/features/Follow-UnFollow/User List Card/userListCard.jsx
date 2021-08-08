import { useDispatch, useSelector } from "react-redux";
import { followFriend, unfollowFriend } from "../friendsSlice";
import { loadAllUsers, loadFriends } from "../friendsSlice";
import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'

// so this component will create a link to new user timelien page 
// Link tag will send user

export const UserListCard = ({ user }) => {
  const friendsState = useSelector((state) => state.friendsData);
  const dispatch = useDispatch();
  const [idArray, setIdArray] = useState([])
  const [temp, setTemp] = useState(true)


  useEffect(() => {
    dispatch(() => loadFriends());
    setIdArray(friendsState.following?.map(item => item._id))
  }, [dispatch, friendsState.following]);


  return (
    <>
    
    <div>
    <Link to={`/timeline/${user._id}`}>
      <h3>Name {user.fullName}</h3>
      <h4>Followers {user.followers.length + 1}</h4>
      <h4>Following {user.following.length + 1} </h4>
      </Link>
      <div>
        {idArray?.includes(user._id) ? (
          <button
            onClick={() => {dispatch(unfollowFriend({ otherUserId: user._id })); setTemp(!temp) } }
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {dispatch(followFriend({ otherUserId: user._id }))  ; setTemp(!temp) } }
          >
            Follow
          </button>
        )}
      </div> 
      </div>
    </>
  );
};

// {/* {
//             friendsState.following.includes(user) ? (
//                 <button
//                 onClick={() => {dispatch(unfollowFriend({otherUserId:user._id})); dispatch(loadAllUsers("ji")) } }
//                 >Unfollow</button>
//             ): <button
//             onClick={() => {dispatch(followFriend({otherUserId:user._id})) ; dispatch(loadAllUsers("ji"))} }
//             >Follow</button>
//         } */}

// if(item._id == user._id){
//     console.log("hi")
//     return(<button
//         onClick={() => dispatch(unfollowFriend({otherUserId:user._id})) }
//         >Unfollow</button>)
// }else {
//     return(<button
//         onClick={() => dispatch(followFriend({otherUserId:user._id}))  }
//         >Follow</button>)
// }
