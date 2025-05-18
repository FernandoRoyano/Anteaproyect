import styles from './Footer.module.css';

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
          <a href="/privacidad">Privacidad</a>
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
