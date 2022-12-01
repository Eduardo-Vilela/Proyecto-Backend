import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
      <>
      <div className='footer-container'>
          <hr/>
          <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647377520/Cruel/logo_footer_viyftc.svg'/>
          <p>la mejor coctelería y tapas de la ciudad</p>
          <div className='footer-icons'><a href='https://www.facebook.com/Cruelbarramorfi/'><span><BsFacebook/></span></a><a href='https://www.instagram.com/cruel.barramorfi/?hl=es'><span><AiFillInstagram/></span></a></div> 
          <div className='nav-footer'>
                <Link to="/Cócteles">Cócteles</Link>
                <span>|</span>
                <Link to="/CocteleriaDeAutor">Cocteleria de Autor</Link>
                <span>|</span>
                <Link to="/Tónicos">Tónicos</Link>
                <span>|</span>
                <Link to="/Clásicos">Clásicos</Link>
                <span>|</span>
                <Link to="/Wiskys">Wiskys</Link>
                <span>|</span>
                <Link to="/Vinos">Vinos</Link>
                <span>|</span>
                <Link to="/Tapas">Tapas</Link>
                <span>|</span>
                <Link to="/Principales">Principales</Link>
                <span>|</span>
                <Link to="/Postres">Postres</Link>
          </div>
      </div>      
      </>
  )
}
