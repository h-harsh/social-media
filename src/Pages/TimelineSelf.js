import { useDispatch, useSelector } from "react-redux";
import { ProfileBoxSelf } from "../features/Posts/Components/Profile Box/profileBox";
import { CreatePost } from "../features/Posts/Components/Create Post/createPost";
import { TPostDisplay } from "../features/Posts/Components/Post Display Timeline/t-postDisplay";

export const TimelineSelf = () => {
  const state = useSelector((state) => state.userData);
  console.log(state);

  return (
    <>
      <p>Login Status: {state.loginStatus}</p>
      {/* <h1>Name: {state.currentUser.fullName} </h1>
      <h2>Email: {state.currentUser.email}</h2> */}

      <div style={{ border: "1px solid black", padding: "1.5rem" }}>
        <ProfileBoxSelf user={state.currentUser} />
      </div>
      <div style={{ border: "1px solid black", padding: "1.5rem" }}>
        <CreatePost />
      </div>
      <div style={{ border: "1px solid black", padding: "1.5rem" }}>
        <TPostDisplay userId={state.currentUser._id} />
      </div>
    </>
  );
};
