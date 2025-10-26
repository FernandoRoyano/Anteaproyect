import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para efectos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const handleLinkClick = () => setMenuAbierto(false);

  // Smooth scroll para enlaces internos
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuAbierto(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_antea.png"
            alt="ANTEA - Ejercicio funcional a domicilio"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button 
          className={`${styles.toggle} ${menuAbierto ? styles.active : ''}`} 
          onClick={toggleMenu} 
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuAbierto ? styles.abierto : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a 
                href="#planes" 
                className={styles.navLink}
                onClick={(e) => handleSmoothScroll(e, '#planes')}
              >
                Planes
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#testimonios" 
                className={styles.navLink}
                onClick={(e) => handleSmoothScroll(e, '#testimonios')}
              >
                Testimonios
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#contacto" 
                className={styles.navLink}
                onClick={(e) => handleSmoothScroll(e, '#contacto')}
              >
                Contacto
              </a>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink} onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
          </ul>
          
          <div className={styles.ctaGroup}>
            <a
              href="tel:+34633261963"
              className={styles.phone}
              onClick={handleLinkClick}
              aria-label="Llamar al 633 261 963"
            >
              📞 633 261 963
            </a>
            <a
              href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20ejercicio%20para%20personas%20mayores%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              onClick={handleLinkClick}
            >
              💬 WhatsApp
            </a>
          </div>
        </nav>
        
        {/* Overlay para cerrar menú móvil */}
        {menuAbierto && <div className={styles.overlay} onClick={() => setMenuAbierto(false)} />}
      </div>
    </header>
  );
}
