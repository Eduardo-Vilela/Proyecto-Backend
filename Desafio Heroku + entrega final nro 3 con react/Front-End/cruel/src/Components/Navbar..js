import React, { useState, useEffect }  from 'react';

import Logoreact from './img/logo.svg';
import './Styles/navbar.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';

const MenuButton = ({ active, handleClick }) => {
  return (
    <div
      className={`menu-button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

const ContentOverlay = ({ active, handleClick }) => {
  return (
    <div
      className={`content-overlay ${active ? "active" : ""}`}
      onClick={handleClick}
    />
  );
};

export default function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const triggerMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const bodyOverflow = showMenu ? "hidden" : "";
    document.body.style.overflow = bodyOverflow;
  }, [showMenu]);
  
  return (
    <>
    <div className='Navbar'>
        <aside className={`sidebar ${showMenu ? "menu-open" : ""}`}>
            <MenuButton active={showMenu} handleClick={triggerMenu} /> 
            <div className='menu-desplegable-icons'><a href='https://www.facebook.com/Cruelbarramorfi/'><span><BsFacebook/></span></a><a href='https://www.instagram.com/cruel.barramorfi/?hl=es'><span><AiFillInstagram/></span></a></div>         
            <Navbar  expand="lg">               
                  <Navbar.Collapse id="basic-navbar-nav" className='show'>
                    <Nav className="me-auto">
                      <Nav.Link><Link to="/" onClick={triggerMenu}>Home</Link></Nav.Link>
                      <NavDropdown title="Tragos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/CocteleriaDeAutor" onClick={triggerMenu}>Coctelería de autor</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Tonicos" onClick={triggerMenu}>Tónicos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Clasicos" onClick={triggerMenu}>Clásicos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Whiskys" onClick={triggerMenu}>Whiskys</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Vinos" onClick={triggerMenu}>Vinos</Link></NavDropdown.Item>                        
                      </NavDropdown>
                      <NavDropdown title="Platos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/Tapas" onClick={triggerMenu}>Tapas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Principales" onClick={triggerMenu}>Principales</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Postres" onClick={triggerMenu}>Postres</Link></NavDropdown.Item>  
                      </NavDropdown>
                      <Nav.Link><Link to="/#formulario" onClick={triggerMenu}>Reserva</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
            </Navbar>  
          <div className='logo-menu-desplegable'>
            <img  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647453591/Cruel/Frame_3_fvknac.svg'/>
          </div>          
        </aside>
    </div>
    <div className={`content ${showMenu ? "menu-open" : ""}`}>
      <div className="header">
          <MenuButton active={showMenu} handleClick={triggerMenu} />
              <Link to="/"><div className="logo-text">
                <img
                  alt="Logo Cruel"
                  src='https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670172315/Thiale_free-file_1_afs8mh.png'
                />
              </div></Link>
      </div>
    </div>
    </>
  )
}
