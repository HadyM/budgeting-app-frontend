import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav className="NavBar">
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
