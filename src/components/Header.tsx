import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = (): JSX.Element => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ToDos</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/todos" className="nav-link">ToDos</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;