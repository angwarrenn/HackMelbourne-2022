import { Outlet, Link } from "react-router-dom";
import { IoHome, IoCalendar, IoDuplicate, IoCreate, IoLogOut } from "react-icons/io5";

const Layout = ({ email, setEmail }) => {
  return (
    <div className="main">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <IoHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <IoCalendar /> Calendar
            </Link>
          </li>
          <li>
            <Link to="/event">
              <IoCreate /> Event
            </Link>
          </li>
          <li>
            <div className="signoutbutton"
              onClick={() => {
                setEmail(null);
              }}
            >
              <IoLogOut /> Sign Out
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
