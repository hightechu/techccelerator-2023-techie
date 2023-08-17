import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink className="nav-btn" eventKey="1" as={Link} to="/">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </NavLink>
                    <NavLink className="nav-btn" eventKey="2" as={Link} to="/">
                        <span className="">Logo.jpg</span>
                    </NavLink>
                    <NavLink className="nav-btn" eventKey="3" as={Link} to="/settings">
                        <span className="material-symbols-outlined">settings</span>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

    );
}
 
export default Navigation;

/*



*/