import "./profileBox.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAuthHeaderForServiceCalls } from "../../Auth User/util";
import { loadOtherUser } from "../postsSlice";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { baseurl } from "../../../utils/baseurl";

export const ProfileBox = ({ userId }) => {
  const state = useSelector((state) => state.userData);
  const user = useSelector((state) => state.postsData.otherUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(state.token);
    dispatch(loadOtherUser(userId));
  }, [dispatch, userId, state.token]);

  return (
    <div>
      {user !== null ? (
        <div className="profile-card">
          <div className="profile-card-image">
            <div className="cover"></div>
            {!user.profilePicture && (
              <div className="pic">
                {" "}
                <Avatar
                  className="avatar"
                  size={200}
                  icon={<UserOutlined />}
                />{" "}
              </div>
            )}

            {user.profilePicture && (
              <div className="pic">
                {" "}
                <img src={`${baseurl}/${user.profilePicture}`} alt="" />{" "}
              </div>
            )}
          </div>

          <div className="profile-card-p2">
            <div className="profile-card-details">
              <h1>{user.fullName}</h1>
              <p> {user.bio}</p>
            </div>

            <div className="profile-card-details-p3">
              <div className="p3-p">
                <p>Followers</p>
                <p>{user.followers.length + 1}</p>
              </div>
              <div className="p3-p">
                <p>Following</p>
                <p>{user.following.length + 1}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loadingsss</h2>
      )}
    </div>
  );
};

export const ProfileBoxSelf = ({ user }) => {
  const state = useSelector((state) => state.userData);

  return (
    <div>
      {state.currentUser !== null ? (
        <div className="profile-card">
          <div className="profile-card-image">
            <div className="cover"></div>
            {!state.currentUser.profilePicture && (
              <div className="pic">
                {" "}
                <Avatar
                  className="avatar"
                  size={200}
                  icon={<UserOutlined />}
                />{" "}
              </div>
            )}

            {state.currentUser && (
              <div className="pic">
                {" "}
                <img src={`${baseurl}/${state.currentUser.profilePicture}`} alt="" />{" "}
              </div>
            )}
          </div>

          <div className="profile-card-p2">
            <div className="profile-card-details">
              <h1>{state.currentUser.fullName}</h1>
              <p> {state.currentUser.bio}</p>
            </div>

            <div className="profile-card-details-p3">
              <div className="p3-p">
                <p>Followers</p>
                <p>{state.currentUser.followers.length + 1}</p>
              </div>
              <div className="p3-p">
                <p>Following</p>
                <p>{state.currentUser.following.length + 1}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loadingsss</h2>
      )}
    </div>
  );
};
export const ProfileBoxSelf2 = ({ user }) => {
  const state = useSelector((state) => state.userData);

  return (
    <div>
      {state.currentUser !== null ? (
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <h2>
            Full Name from user : {user.fullName} || Full name from
            state.userdata {state.currentUser.fullname}{" "}
          </h2>
        </div>
      ) : (
        <h2>Loadingsss</h2>
      )}
    </div>
  );
};
