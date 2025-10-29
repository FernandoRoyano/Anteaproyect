// src/components/CTAFinalLanding.tsx
import styles from './CTAFinalLanding.module.css';

export default function CTAFinalLanding() {
  return (
    <section className={styles.cta}>
      <h2>Solo aceptamos 5 familias nuevas al mes.</h2>
      <p>
        Reserva tu plaza antes de que se agoten.<br />
        <strong>Tu decisión hoy cambia el futuro de tu familiar.</strong>
      </p>
      <a
        href="https://wa.me/34633261963?text=Hola,%20quiero%20reserva%20plaza%20en%20ANTEASALUD"
        className={styles.boton}
        target="_blank"
        rel="noopener noreferrer"
      >
        📱 Solicita evaluación gratuita por WhatsApp
      </a>
    </section>
  );
}
