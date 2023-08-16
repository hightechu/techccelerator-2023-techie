import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink className="nav-btn" eventKey="1" as={Link} to="/">My Awesome App</NavLink>
                    <NavLink className="nav-btn" eventKey="3" as={Link} to="/settings">Settings</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

    );
}
 
export default Navigation;

/*



*/