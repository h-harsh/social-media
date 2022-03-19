import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FeedComp } from "../features/Auth User/Feed Component/feedComp"

export const Home = () => {
  const token = useSelector(state => state.userData.token)
  const navigate = useNavigate()

  return (
    token ? (
      <div className="to-center" >
    <FeedComp/>
    </div>
    ): navigate("/login")
  );
};
