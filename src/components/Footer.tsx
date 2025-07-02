import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} ANTEA. Todos los derechos reservados.</p>
      <div className={styles.columns}>
        <div className={styles.col}>
          {/* Estos sí pueden ser <a> porque son anchors a secciones de la MISMA página */}
          <a href="#planes">Planes</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className={styles.col}>
          {/* Para páginas internas, SIEMPRE <Link /> */}
          <Link href="/privacidad/" passHref>
            Privacidad
          </Link>
          <Link href="/aviso-legal/" passHref>
            Aviso Legal
          </Link>
          <Link href="/cookies/" passHref>
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
