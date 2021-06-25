import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/HM-logo.png";

export default function NavBar() {
  return (
    <Nav className="NavBar Theme">
      <Nav.Item className="Current">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <h1>
          <Link to="/transactions">Budget Application</Link>
        </h1>
      </Nav.Item>
      <Nav.Item>
        <button>
          <Link to="/transactions/new">New Transaction</Link>
        </button>
      </Nav.Item>
    </Nav>
  );
}
