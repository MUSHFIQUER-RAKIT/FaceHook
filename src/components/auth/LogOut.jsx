import { useNavigate } from "react-router";
import Logout from "../../assets/icons/logout.svg";

export default function LogOut() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogOut}>
      <img src={Logout} alt="Logout" />
    </button>
  );
}
