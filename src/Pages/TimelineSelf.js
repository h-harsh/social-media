import { useDispatch, useSelector } from "react-redux";
import { ProfileBoxSelf } from "../features/Posts/Components/Profile Box/profileBox";
import { CreatePost } from "../features/Posts/Components/Create Post/createPost";
import { TPostDisplay } from "../features/Posts/Components/Post Display Timeline/t-postDisplay";

export const TimelineSelf = () => {
  const state = useSelector((state) => state.userData);
  console.log(state);

  return (
    <>
      <div >
        <ProfileBoxSelf user={state.currentUser} />
      </div>
      <div className="to-center">
        <CreatePost />
      </div>
      <div className="to-center">
        <TPostDisplay userId={state.currentUser._id} />
      </div>
    </>
  );
};
