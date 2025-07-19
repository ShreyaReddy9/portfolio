
import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl } from '../../utils';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false);
    return (
        <>
          
          <nav className={styles.navbar}>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={ '/assets/nav/menuIcon.png'} alt="Menu Button"
        onClick={() => setMenuOpen(!menuOpen)} />
              <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="https://shreyareddy9.github.io/blogsite/" target="_blank" rel="noopener noreferrer">Blog</a></li>

                
              </ul>
            </div>
            <div className={styles.socialIcons}>
                <a href="mailto:gudurushreya.16@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://in.linkedin.com/in/shreyareddy-g" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
          </nav>
        </>
      );
      
};
