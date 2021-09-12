import "./editDetails.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEdit, userEditProfilePicture } from "../authUserSlice";
import { Button } from "antd";
import { Avatar } from "antd";
import axios from "axios";
import { baseurl } from "../../../utils/baseurl";
import { UserOutlined } from "@ant-design/icons";
import { setupAuthHeaderForServiceCalls } from "../util";

export const EditDetails = () => {
  const user = useSelector((state) => state.userData.currentUser);
  const token = useSelector((state) => state.userData.token);
  const [updatedDetail, setUpdatedDetail] = useState({
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    bio: user.bio,
    gender: user.gender,
    dob: user.dob,
    profilePicture: user.profilePicture,
  });
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);

  const onFormSubmit = async () => {
    const formData = new FormData();
    formData.append("profile-image", file);
    if (file) {
      setupAuthHeaderForServiceCalls(token)
      dispatch(userEditProfilePicture(formData));
    }
  };

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setDisplayFile(URL.createObjectURL(e.target.files[0]));
    }
  };
const profilePicture = <img src={`${baseurl}/${user.profilePicture}`} alt="Error" /> 
const defaultProfilePicture = (
<div className="pic">
<Avatar
  className="avatar"
  size={200}
  icon={<UserOutlined />}
/>
</div>
)
const uploadedProfilePicture = <img  src={displayFile} alt="Error" />
  return (
    <div className="acc-mang-outer">
      <h1>Edit Account Details</h1>
      <div>
        <div>
          <div className="pic">
            {user.profilePicture ? (displayFile ? (uploadedProfilePicture) : (profilePicture)): defaultProfilePicture }
          </div>
          <input
            type="file"
            name="profile-image"
            id="profile-file"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="acc-mang-p1">
        <div className="innzer">
          <p> FullName</p>
          <input
            type="text"
            placeholder={updatedDetail.fullName}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, fullName: e.target.value })
            }
          />
        </div>
        <div className="innzer">
          <p> Username</p>
          <input
            type="text"
            placeholder={updatedDetail.userName}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, userName: e.target.value })
            }
          />
        </div>
        <div className="innzer">
          <p> Email</p>
          <input
            type="text"
            placeholder={updatedDetail.email}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, email: e.target.value })
            }
          />
        </div>
        <div className="innzer">
          <p> Bio</p>
          <input
            type="text"
            placeholder={updatedDetail.bio}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, bio: e.target.value })
            }
          />
        </div>
        <div className="innzer">
          <p> Gender</p>
          <input
            type="text"
            placeholder={updatedDetail.gender}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, gender: e.target.value })
            }
          />
        </div>
        <div className="innzer">
          <p> DOB</p>
          <input
            type="text"
            placeholder={updatedDetail.dob}
            onChange={(e) =>
              setUpdatedDetail({ ...updatedDetail, dob: e.target.value })
            }
          />
        </div>
      </div>
      <Button
        size="large"
        onClick={() => {
          dispatch(userEdit(updatedDetail));
          onFormSubmit();
        }}
      >
        Save Changes
      </Button>
    </div>
  );
};
