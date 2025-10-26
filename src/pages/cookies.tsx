import { useState, useEffect } from 'react';
import styles from '../components/CookieBanner.module.css'; // 🔧 CAMBIO AQUÍ

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó cookies
    const consent = localStorage.getItem('antea-cookies-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('antea-cookies-consent', 'all');
    localStorage.setItem('antea-cookies-date', new Date().toISOString());
    setShowBanner(false);
    
    // Activar Google Analytics u otros scripts
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem('antea-cookies-consent', 'essential');
    localStorage.setItem('antea-cookies-date', new Date().toISOString());
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem('antea-cookies-consent', 'rejected');
    localStorage.setItem('antea-cookies-date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieContent}>
        <div className={styles.cookieMain}>
          <div className={styles.cookieInfo}>
            <h3 className={styles.cookieTitle}>🍪 Uso de Cookies</h3>
            <p className={styles.cookieText}>
              En ANTEA SALUD utilizamos cookies para mejorar tu experiencia de navegación, 
              analizar el tráfico web y personalizar el contenido. 
              <strong> Tu privacidad es importante para nosotros.</strong>
            </p>
          </div>

          <div className={styles.cookieButtons}>
            <button 
              onClick={acceptAllCookies}
              className={styles.acceptAll}
            >
              ✅ Aceptar todas
            </button>
            <button 
              onClick={acceptEssentialOnly}
              className={styles.acceptEssential}
            >
              🔧 Solo esenciales
            </button>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className={styles.customize}
            >
              ⚙️ Personalizar
            </button>
          </div>
        </div>

        {showDetails && (
          <div className={styles.cookieDetails}>
            <div className={styles.cookieCategories}>
              <div className={styles.cookieCategory}>
                <h4>🔧 Cookies Esenciales</h4>
                <p>Necesarias para el funcionamiento básico del sitio web (formulario de contacto, navegación).</p>
                <label className={styles.cookieToggle}>
                  <input type="checkbox" checked disabled />
                  <span>Siempre activas</span>
                </label>
              </div>
              
              <div className={styles.cookieCategory}>
                <h4>📊 Cookies Analíticas</h4>
                <p>Nos ayudan a entender cómo interactúas con nuestra web para mejorar nuestros servicios.</p>
                <label className={styles.cookieToggle}>
                  <input type="checkbox" defaultChecked />
                  <span>Google Analytics</span>
                </label>
              </div>
              
              <div className={styles.cookieCategory}>
                <h4>💬 Cookies de Marketing</h4>
                <p>Para mostrar contenido relevante sobre nuestros servicios de ejercicio para mayores.</p>
                <label className={styles.cookieToggle}>
                  <input type="checkbox" defaultChecked />
                  <span>WhatsApp, Meta Pixel</span>
                </label>
              </div>
            </div>

            <div className={styles.detailButtons}>
              <button onClick={rejectAll} className={styles.rejectAll}>
                ❌ Rechazar no esenciales
              </button>
              <button onClick={acceptAllCookies} className={styles.acceptAll}>
                ✅ Confirmar selección
              </button>
            </div>
            
            <p className={styles.policyLink}>
              Lee nuestra <a href="/cookies/" target="_blank">Política de Cookies</a> completa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
