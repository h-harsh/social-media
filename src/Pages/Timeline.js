import { useDispatch, useSelector } from "react-redux";
import { ProfileBox } from "../features/Posts/Components/Profile Box/profileBox";
import { TPostDisplay } from "../features/Posts/Components/Post Display Timeline/t-postDisplay";
import { useParams } from "react-router-dom";
export const Timeline = () => {
  const state = useSelector((state) => state.userData);

  const { userId } = useParams();

  return (
    <>
      <p>Login Status: {state.loginStatus}</p>
      <div style={{ border: "1px solid black", padding: "1.5rem" }}>
        <ProfileBox userId={userId} />
      </div>
      <div style={{ border: "1px solid black", padding: "1.5rem" }}>
        <TPostDisplay userId={userId} />
      </div>
    </>
  );
};
