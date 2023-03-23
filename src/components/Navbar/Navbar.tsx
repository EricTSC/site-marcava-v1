import React from "react";
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="https://www.google.com.br">Ínicio</a>
                <a href="https://www.google.com.br">Quem somos</a>
                <a href="https://www.google.com.br">O que fazemos</a>
                <a href="https://www.google.com.br">Catálogo</a>
                <a href="https://www.google.com.br">Entre em contato</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    );
};

export default Navbar;