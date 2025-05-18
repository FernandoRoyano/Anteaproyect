import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

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

        <button className={styles.toggle} onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`${styles.nav} ${menuAbierto ? styles.abierto : ''}`}>
          <a href="#planes">Planes</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto" className={styles.cta}>Solicita sesión</a>
        </nav>
      </div>
    </header>
  );
}
