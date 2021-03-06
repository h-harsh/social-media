import {  useSelector } from "react-redux";
import { ProfileBoxSelf } from "../features/Posts/Profile Box/profileBox";
import { CreatePost } from "../features/Posts/Create Post/createPost";
import { TPostDisplay } from "../features/Posts/Post Display Timeline/t-postDisplay";

export const TimelineSelf = () => {
  const state = useSelector((state) => state.userData);


  return (
    <>
      <div >
        <ProfileBoxSelf user={state.currentUser} />
      </div>
      <div className="to-center">
        <CreatePost />
      </div>
      <div className="to-center">
        <TPostDisplay userId={state.currentUser._id} self />
      </div>
    </>
  );
};
