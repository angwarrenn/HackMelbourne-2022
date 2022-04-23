import { Outlet, Link } from "react-router-dom";
import { IoHome, IoCalendar, IoDuplicate, IoCog} from "react-icons/io5";

const Layout = () => {
    return (
      <div className="main">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <IoHome /> Dashboard</Link>
            </li>
            <li>
              <Link to="/calendar">
                  <IoCalendar /> Calendar</Link>
            </li>
            <li>
              <Link to="/team">
                  <IoDuplicate /> Add Schedule </Link>
            </li>
            <li>
              <Link to="/settings">
                  <IoCog /> Settings</Link>
            </li>
            <li>
              <Link to="/login">
                  <IoCog /> Log In</Link>
            </li>
            <li>
              <Link to="/signup">
                  <IoCog /> Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )
  };
  
  export default Layout;