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
    localStorage.setItem("cookiesDate", new Date().toISOString());
    setVisible(false);
    
    // Activar Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', { 
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleOnlyNecessary = () => {
    localStorage.setItem("cookiesAccepted", "necessary");
    localStorage.setItem("cookiesDate", new Date().toISOString());
    setVisible(false);
    
    // Bloquear cookies no esenciales
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', { 
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.icon}>🍪</span>
          <span>
            <strong>ANTEA SALUD</strong> utiliza cookies para mejorar tu experiencia 
            navegando por nuestra web de ejercicio funcional para personas mayores en Madrid.
            <a 
              href="/cookies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              Política de Cookies
            </a>
          </span>
        </div>
        
        <div className={styles.buttonGroup}>
          <button 
            onClick={handleOnlyNecessary} 
            className={styles.buttonOutline}
            title="Solo cookies técnicas necesarias"
          >
            Solo esenciales
          </button>
          <button 
            onClick={handleAcceptAll} 
            className={styles.button}
            title="Aceptar todas las cookies"
          >
            ✅ Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
