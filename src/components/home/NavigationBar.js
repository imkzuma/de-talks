import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../../img/Logo.png";
import LogoMobile from "../../img/Logo-Mobile.png";

import './style/NavigationBar.css';

export default function NavigationBar() {
    const expand = 'lg';
    let Sticky; let Navigate;

    const[nowLogo , setNowLogo] = useState(Logo);
    const[nowVariant , setNowVariant] = useState('dark');

    function handleSticky(){
        window.pageYOffset > Sticky ? Navigate.classList.add('sticky') : Navigate.classList.remove('sticky');
        window.pageYOffset > Sticky ? setNowLogo(LogoMobile) : setNowLogo(Logo);
        window.pageYOffset > Sticky ? setNowVariant('light') : setNowVariant('dark');
    }
    
    useEffect(() => { // eslint-disable-next-line
        Navigate = document.getElementById('sticky-nav');
        Sticky = Navigate.offsetTop + 850;
        window.addEventListener('scroll' , handleSticky);
        
        return() =>{
            window.removeEventListener('scroll' , handleSticky);
        }
    } , []);

    return (
        <>
            <Navbar key = {expand} expand = {expand} className = "Navbar" id = "sticky-nav" variant = {nowVariant} fixed='top'>
                <Container>
                    <Navbar.Brand href="/" className = "Brand" > <img src = { nowLogo} width = "30%" alt = "Logo-detalks" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "offcanvasNavbar-expand-lg" className = "Nav-Toggle" />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                        <Offcanvas.Header closeButton className = "offcanvas-header">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src = { LogoMobile } width = "30%" alt = "Logo-detalks" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className = "offcanvas-body">
                            <Nav className="justify-content flex-grow-1 Nav-inside">
                                <Nav.Link className = "Nav-Link"> Home </Nav.Link>
                                <Nav.Link className = "Nav-Link"> Tentang Kita </Nav.Link>
                                <NavDropdown title = "Course List" id={`offcanvasNavbarDropdown-expand-${expand}`} className = "Nav-Dropdown" >
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item"> Personal Course </NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > Student Course </NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > Profesional Course </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > Premium Course </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="justify-content-end flex-grow-1 Nav-inside">
                                <Nav.Link href="/" className = "nav-masuk">  Masuk </Nav.Link>
                                <Nav.Link href="/" className = "nav-daftar"> Daftar </Nav.Link>
                            </Nav>
                            <footer className = "footer-nav" >&copy; De-Talks 2022</footer>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
  );
}