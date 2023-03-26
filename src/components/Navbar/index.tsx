import React from "react";
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from "./styles.module.scss";


function Navbar() {

    return (
        <>
            <div className={styles.conteiner}>
                <header className={styles.header}>
                    <h3>LOGO</h3>
                    <nav className={styles.nav} >
                        <a className="a" target={"_blank"} href="https://www.google.com.br">Ínicio</a>
                        <a className="a" target={"_blank"} href="https://www.google.com.br">Quem somos</a>
                        <a className="a" target={"_blank"} href="https://www.google.com.br">O que fazemos</a>
                        <a className="a" target={"_blank"} href="https://www.google.com.br">Catálogo</a>
                        <a className="a" target={"_blank"} href="https://www.google.com.br">Entre em contato</a>
                        <button className={styles['nav-btn nav-close-btn']} >
                            <FaTimes />
                        </button>
                    </nav>
                    <button className={styles['nav-btn']} >
                        <FaBars />
                    </button>
                </header>
            </div>
        </>
    );
};

export default Navbar;