//React Hooks Import 
import { useEffect, useState } from 'react';

//Bootstrap Import
import { Container , Nav , Navbar , NavDropdown , Offcanvas } from "react-bootstrap";

//Image Import
import Logo from "../../img/Logo.png";
import LogoMobile from "../../img/Logo-Mobile.png";

//Style for this component
import './style/NavigationBar.css';

export default function NavigationBar(){
    const expand = 'lg';
    const Responsive = "offcanvasNavbar-expand-lg";

    const Sticky = 850; let Navigate;
    
    const[nowLogo , setNowLogo] = useState(Logo);
    const[nowVariant , setNowVariant] = useState('dark');
    const[Hover , setHover] = useState(false);

    // Handle Scroll Navbar Dekstop
    function handleDekstop(){
        window.pageYOffset > Sticky ? Navigate.classList.add('sticky') : Navigate.classList.remove('sticky');
        window.pageYOffset > Sticky ? setNowLogo(LogoMobile) : setNowLogo(Logo);
        window.pageYOffset > Sticky ? setNowVariant('light') : setNowVariant('dark');
    }
    
    // Handle Scroll Navbar Mobile
    function handleMobile(){
        const widthMobile = 691;
        window.pageYOffset > widthMobile ? Navigate.classList.add('sticky') : Navigate.classList.remove('sticky');
        window.pageYOffset > widthMobile ? setNowLogo(LogoMobile) : setNowLogo(Logo);
        window.pageYOffset > widthMobile ? setNowVariant('light') : setNowVariant('dark');
    }
    
    // this function will be called only once when the component is mounted
    useEffect(() => { // eslint-disable-next-line
        Navigate = document.getElementById('sticky-nav');

        window.innerWidth < 425 ? window.addEventListener('scroll' , handleMobile) : window.addEventListener('scroll' , handleDekstop);
        
        return() => { 
            window.innerWidth < 425 ? window.removeEventListener('scroll' , handleMobile) : window.removeEventListener('scroll' , handleDekstop);
        }
    } , []);
    
    return (
        <>
            <Navbar key = {expand} expand = {expand} className = "Navbar" id = "sticky-nav" variant = {nowVariant} fixed='top'>
                <Container>
                    <Navbar.Brand href="/" className = "Brand" > <img src = { nowLogo} width = "30%" alt = "Logo-detalks" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls = { Responsive } className = "Nav-Toggle" />
                    <Navbar.Offcanvas id = { Responsive } aria-labelledby = { Responsive } placement="end">
                        <Offcanvas.Header closeButton className = "offcanvas-header">
                            <Offcanvas.Title id = { Responsive } >
                                <img src = { LogoMobile } width = "30%" alt = "Logo-detalks" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className = "offcanvas-body">
                            <Nav className="justify-content flex-grow-1 Nav-inside">
                                <Nav.Link className = "Nav-Link" href = '/'> Home </Nav.Link>
                                <Nav.Link className = "Nav-Link" href = '/TentangKita'> Tentang Kita </Nav.Link>

                                <NavDropdown 
                                    title = {"Course List"} 
                                    id = "offcanvasNavbarDropdown-expand-lg" 
                                    show = { Hover } 
                                    className = "Nav-Dropdown"  
                                    onMouseEnter = { () => setHover(!Hover) } 
                                    onMouseLeave = { () => setHover(false) }
                                    aria-labelledby = "offcanvasNavbarDropdown-expand-lg"
                                >
                                    
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item"> <i className = 'fa fa-bookmark-o'/> Personal Course </NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > <i className = 'fa fa-server'/> Student Course </NavDropdown.Item>
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > <i className = 'fa fa-bar-chart-o'/> Profesional Course </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/" className = "Nav-Dropdown-Item" > <i className = 'fa fa-star-o'/> Premium Course </NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                            <Nav className="justify-content-end flex-grow-1 Nav-inside">
                                <Nav.Link href="/Login" className = "nav-masuk">  Masuk </Nav.Link>
                                <Nav.Link href="/Daftar" className = "nav-daftar"> Daftar </Nav.Link>
                            </Nav>
                            <footer className = "footer-nav" >&copy; De-Talks 2022</footer>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
  );
}