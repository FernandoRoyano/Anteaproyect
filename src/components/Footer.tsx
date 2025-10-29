import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Información principal */}
          <div className={styles.mainInfo}>
            <div className={styles.logoSection}>
              <h3 className={styles.logoText}>ANTEA SALUD</h3>
              <p className={styles.tagline}>
                Especialistas en ejercicio funcional para personas mayores en Madrid
              </p>
            </div>
            
            <div className={styles.contactInfo}>
              <h4>📞 Contacto Directo</h4>
              <p>
                <a href="tel:+34633261963" className={styles.phone}>
                  633 261 963
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20ejercicio%20para%20mayores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsapp}
                >
                  WhatsApp: 633 261 963
                </a>
              </p>
            </div>
          </div>

          {/* Columnas de navegación */}
          <div className={styles.columns}>
            <div className={styles.col}>
              <h4>Servicios</h4>
              <a href="#planes">Programas de ejercicio</a>
              <a href="#testimonios">Casos de éxito</a>
              <a href="#contacto">Evaluación gratuita</a>
              <Link href="/ejercicio-mayores-madrid/">Ejercicio para mayores</Link>
            </div>
            
            <div className={styles.col}>
              <h4>Zonas de Servicio</h4>
              <p>Madrid Capital</p>
              <p>Pozuelo de Alarcón</p>
              <p>Las Rozas</p>
              <p>Majadahonda</p>
              <p>Alcobendas</p>
            </div>
            
            <div className={styles.col}>
              <h4>Horarios</h4>
              <p><strong>L-V:</strong> 9:00-13:00 | 16:00-19:00</p>
              <p><strong>Sáb:</strong> 9:00-13:00</p>
              <p><strong>Dom:</strong> Solo emergencias</p>
            </div>  
              <div className={styles.col}>
                <h4>Legal</h4>
                <Link href="/privacidad">Política de Privacidad</Link>
                <Link href="/aviso-legal">Aviso Legal</Link>
                <Link href="/politica-cookies">Política de Cookies</Link>
              </div>
          </div>
        </div>

        {/* Información adicional SEO */}
        <div className={styles.seoInfo}>
          <p>
            <strong>ANTEA SALUD</strong> - Entrenador personal especializado en ejercicio funcional 
            para personas mayores en Madrid. Servicio a domicilio con metodología Vivifrail. 
            Recupera movilidad, fuerza y autonomía en casa.
          </p>
        </div>

        {/* Copyright y certificaciones */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} ANTEA SALUD. Todos los derechos reservados.</p>
            <p className={styles.nif}>Fernando Royano Cabrero - Entrenador Personal Colegiado</p>
          </div>
          
          <div className={styles.certifications}>
            <p className={styles.badges}>
              🎓 Profesional Titulado • 🔬 Método Vivifrail • 🏠 Servicio a Domicilio • 🆓 Primera Sesión Gratuita
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
