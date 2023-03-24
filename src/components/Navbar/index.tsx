import React from "react";
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './styles.module.scss';

function Navbar() {

    const navRef = React.createRef<current.classList.toggle & "responsive_nav" & null>()


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
            <header className={styles.header}>
                <h3>LOGO</h3>
                <nav className={styles.nav} ref={navRef}>
                    <a className="a" target={"_blank"} href="https://www.google.com.br">Ínicio</a>
                    <a className="a" target={"_blank"} href="https://www.google.com.br">Quem somos</a>
                    <a className="a" target={"_blank"} href="https://www.google.com.br">O que fazemos</a>
                    <a className="a" target={"_blank"} href="https://www.google.com.br">Catálogo</a>
                    <a className="a" target={"_blank"} href="https://www.google.com.br">Entre em contato</a>
                    <button className={styles['nav-btn nav-close-btn']} onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className={styles['nav-btn']} onClick={showNavbar}>
                    <FaBars />
                </button>

            </header>
        </>
    );
};

export default Navbar;