import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context";
import { logout } from "./api";

function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log("Header Auth: ", auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div style={{ margin: 10 }}>
      <Link style={{ margin: 20 }} to="/userHome">
        Home
      </Link>
      <Link style={{ margin: 20 }} to="/login">
        Login
      </Link>
      <Link style={{ margin: 20 }} to="/profile">
        Profile
      </Link>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Header;

{
  /* <div style={{ margin: 10 }}>
      {auth.accessToken ? (
        <Link style={{ marginRight: 20 }} to="/userHome">
          Home
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div> */
}
