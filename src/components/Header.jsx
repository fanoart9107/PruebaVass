import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Cookies from 'universal-cookie';




const Header = () => {


    const cookies = new Cookies();

    const cerrarSesion = () =>{
        cookies.remove('id', {path: '/' });
        cookies.remove('fistname', {path: '/' });
        cookies.remove('lastname', {path: '/' });
        cookies.remove('username', {path: '/' });
        window.location.href="./";

    }

   

    return(
        <header className="header  ">
            <div className="container d-flex align-items-center  justify-content-between">
                <div className="logo"  >
                    <img className="img" src={logo} alt="logo" width="160px" />
                </div>
                <ul className="menu d-flex flex-row">
                    <li><Link to='/productos'>Productos</Link></li>
                    <li><Link to='/nuevo-producto'>Nuevo producto</Link></li>
                    <li> <button className="btn btn-outline-light" onClick={()=> cerrarSesion() } > Cerrar sesion </button> </li>
                </ul>
            </div>
        </header>

    )
    
};

export default Header;