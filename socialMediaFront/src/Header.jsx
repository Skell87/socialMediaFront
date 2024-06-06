import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context";

function Header() {
  const { auth } = useContext(AuthContext);
  console.log("Header Auth: ", auth);
  return (
    <div style={{ margin: 10 }}>
      <Link style={{ marginRight: 20 }} to="/userHome">
        Home
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
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
