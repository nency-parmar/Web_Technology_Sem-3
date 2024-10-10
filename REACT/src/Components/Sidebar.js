import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;