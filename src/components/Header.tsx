import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // Cierra el menú al hacer click en cualquier enlace
  const handleLinkClick = () => setMenuAbierto(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo_antea.png"
            alt="ANTEA logo"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>

        <button className={styles.toggle} onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>

<nav className={`${styles.nav} ${menuAbierto ? styles.abierto : ''}`}>
  <a href="#planes" onClick={handleLinkClick}>Planes</a>
  <a href="#testimonios" onClick={handleLinkClick}>Testimonios</a>
  <a href="/blog" onClick={handleLinkClick}>Blog</a>
  <a
    href="https://wa.me/34633261963"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.cta}
    onClick={handleLinkClick}
  >
    Solicita sesión
  </a>
</nav>
      </div>
    </header>
  );
}
