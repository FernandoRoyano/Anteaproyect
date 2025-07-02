import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} ANTEA. Todos los derechos reservados.</p>
      <div className={styles.columns}>
        <div className={styles.col}>
          <a href="#planes">Planes</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className={styles.col}>
          <Link href="/privacidad/">Privacidad</Link>
          <Link href="/aviso-legal/">Aviso Legal</Link>
          <Link href="/cookies/">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
