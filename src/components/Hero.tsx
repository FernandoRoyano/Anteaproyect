import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Entrenador Personal para Personas Mayores en Madrid
        </h1>
        <h2 className={styles.subtitle_seo}>
          Ejercicio Funcional a Domicilio - Recupera tu Independencia
        </h2>
        <p className={styles.subtitle}>
          Especialistas en ejercicio terapéutico personalizado para mayores. <br />
          Recuperamos movilidad, fuerza y confianza en la comodidad de tu hogar. <br />
          Método basado en evidencia científica con resultados medibles.
        </p>
        
        <div className={styles.benefits}>
          ✓ Primera valoración GRATUITA • ✓ Profesional titulado • ✓ Material incluido
        </div>
        
        <a
          href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20la%20valoración%20gratuita%20de%20ejercicio%20en%20casa"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          📞 Solicita tu valoración gratuita
        </a>
        
        <p className={styles.ubicacion}>
          📍 Madrid • Pozuelo • Las Rozas • Majadahonda • Alcobendas
        </p>
        
        <p className={styles.urgencia}>
          <strong>⏰ Solo 5 nuevas familias al mes - Plazas limitadas</strong>
        </p>
      </div>
    </section>
  );
}
