import { useDispatch, useSelector } from "react-redux";
import { ProfileBox } from "../features/Posts/Components/Profile Box/profileBox";
import { TPostDisplay } from "../features/Posts/Components/Post Display Timeline/t-postDisplay";
import { useParams } from "react-router-dom";
export const Timeline = () => {
  const state = useSelector((state) => state.userData);

  const { userId } = useParams();

  return (
    <>
      <div>
        <ProfileBox userId={userId} />
      </div>
      <div className="to-center">
        <TPostDisplay userId={userId} />
      </div>
    </>
  );
};
