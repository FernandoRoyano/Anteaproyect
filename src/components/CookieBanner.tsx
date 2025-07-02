import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookiesAccepted", "all");
    setVisible(false);
    // Aquí podrías activar scripts analíticos o de marketing
    // window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const handleOnlyNecessary = () => {
    localStorage.setItem("cookiesAccepted", "necessary");
    setVisible(false);
    // Aquí podrías bloquear cookies no esenciales
    // window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieBanner}>
      <span className={styles.text}>
        Usamos cookies para mejorar tu experiencia y analizar el uso de la web.
        <a href="/cookies" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Política de Cookies
        </a>
      </span>
      <div className={styles.buttonGroup}>
        <button onClick={handleOnlyNecessary} className={styles.buttonOutline}>
          Solo imprescindibles
        </button>
        <button onClick={handleAcceptAll} className={styles.button}>
          Aceptar todas
        </button>
      </div>
    </div>
  );
}
