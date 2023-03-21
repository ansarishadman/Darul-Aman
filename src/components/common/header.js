import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import masjidLogo from '../../assets/masjidLogo.png';
import './common.scss';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="header_english-font">
                    <Navbar.Brand href="#home">
                        <div className='header-logo'>

                            <img
                                alt=""
                                src={masjidLogo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '} Darul-Aman.org
                        </div>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#mosque">Mosque</Nav.Link>
                            <Nav.Link href="#prayer">Prayer</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
                            <Nav.Link href="#subProjects">Sub-Projects</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;