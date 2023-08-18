import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';

const Navigation = (props) => {

    const navigate = useNavigate();

    function GoHome() {
        navigate("/");
    }

    function GoToSettings() {
        navigate("/account");
    }
    
    const handleLogout = () => {               
        signOut(auth).then(() => {
            // Sign-out successful. Redirect to landing page
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    let topleft = (
        <button className='btn btn-outline-primary btn-lg pt-3 rounded-circle' onClick={GoHome}>
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
    );
    if (props.topleft === "logout") {
        topleft = (
            <button className='btn btn-outline-danger btn-lg pt-3 rounded-circle' onClick={handleLogout}>
                <span className="material-symbols-outlined">logout</span>
            </button>
        );
    }

    return (

        <header className='d-flex justify-content-between'>
            {topleft}
            <button className='btn btn-lg pt-3' onClick={GoHome}>
                <img className="" alt="Logo" src="" />
            </button>
            <button className='btn btn-outline-secondary btn-lg pt-3 rounded-circle' onClick={GoToSettings}>
                <span className="material-symbols-outlined">settings</span>
            </button>

        </header>

    );
}

/*

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

*/

export default Navigation;