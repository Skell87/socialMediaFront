import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{ margin: 10 }}>
      <Link style={{ marginRight: 20 }} to='/userHome'>Home</Link>
      <Link to='/login'>Login</Link>
      {/* <link to='/UserHome'>Home</link> */}
    </div>
  )
}

export default Header