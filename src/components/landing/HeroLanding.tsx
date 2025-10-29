// src/components/HeroLanding.tsx
import styles from './HeroLanding.module.css';

export default function HeroLanding() {
  return (
    <section className={styles.hero}>
      <h1>Recupera la independencia de tu familiar mayor</h1>
      <p>
        Entrenamiento funcional y acompañamiento emocional a domicilio en Madrid.<br />
        <strong>Solo 5 plazas nuevas al mes</strong> — ¡Consulta tu disponibilidad hoy!
      </p>
      <a 
        href="https://wa.me/34633261963?text=Hola,%20quiero%20solicitar%20la%20evaluación%20gratuita"
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        📱 Solicitar evaluación gratuita
      </a>
    </section>
  );
}
