import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavigationBar.css';
import Logo from "../../img/Logo.png";

export default function NavigationBar() {
    const expand = 'lg';
    let Sticky; let Navigate;
    
    function handleSticky(){
        window.pageYOffset > Sticky ? Navigate.classList.add('sticky') : Navigate.classList.remove('sticky');
    }
    
    useEffect(() => {
        Navigate = document.getElementById('sticky-nav');
        Sticky = Navigate.offsetTop;
        window.addEventListener('scroll' , handleSticky);

        return() =>{
            window.removeEventListener('scroll' , handleSticky);
        }
    } , []);

    return (
        <>
            <Navbar key = {expand} expand = {expand} className = "Navbar" id = "sticky-nav">
                <Container fluid>
                    <Navbar.Brand href="/" className = "Brand" > <img src = { Logo } width = "10%" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "offcanvasNavbar-expand-lg" className = "Nav-Toggle" />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                        <Offcanvas.Header closeButton className = "Offcanvas-header">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src = { Logo } width = "10%" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className = "Offcanvas-body">
                            <Nav className="justify-content-end flex-grow-1 pe-3 Nav-inside">
                                <Nav.Link className = "Nav-Link"> <a>Home</a> </Nav.Link>
                                <Nav.Link className = "Nav-Link"> <a>Tentang Kita</a> </Nav.Link>
                                <NavDropdown title="Course List" id={`offcanvasNavbarDropdown-expand-${expand}`} className = "Nav-Dropdown" >
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item"><a>Personal Course</a></NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" ><a>Student Course</a></NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" ><a>Profesional Course</a></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" ><a>Premium Course</a></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/" className = "Nav-Span-one"> <span>Masuk</span> </Nav.Link>
                                <Nav.Link href="/" className = "Nav-Span-two"> <span>Daftar</span> </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
  );
}