import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

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
  <ul className={styles.navList}>
    <li className={styles.navItem}><a href="#planes" className={styles.navLink}>Planes</a></li>
    <li className={styles.navItem}><a href="#testimonios" className={styles.navLink}>Testimonios</a></li>
    <li className={styles.navItem}><a href="#contacto" className={styles.navLink}>Contacto</a></li>
    <li className={styles.navItem}>
      <Link href="/blog" className={styles.enlace}>
       Blog
      </Link>

    </li>
  </ul>
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
