import { Outlet, Link } from "react-router-dom";
import { BiHome, BiCalendar, BiAddToQueue, BiCog} from "react-icons/bi";

const Layout = () => {
    return (
      <div className="main">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <BiHome /> Dashboard</Link>
            </li>
            <li>
              <Link to="/calendar">
                  <BiCalendar /> Calendar</Link>
            </li>
            <li>
              <Link to="/team">
                  <BiAddToQueue /> Add Schedule </Link>
            </li>
            <li>
              <Link to="/settings">
                  <BiCog /> Settings</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )
  };
  
  export default Layout;