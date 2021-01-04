import React from 'react';
import '../assets/styles/components/Header.scss' ;

const Header = () => (    
    <header classname="header">
        <img tabindex="0" classname="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
        <div classname="header__menu">
            <div classname="header__menu--profile">
                <img src="./icons/user-icon.png" alt="user" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;