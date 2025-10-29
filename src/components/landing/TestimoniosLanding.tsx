// src/components/TestimoniosLanding.tsx
import styles from './TestimoniosLanding.module.css';

export default function TestimoniosLanding() {
  return (
    <section className={styles.section}>
      <h2>Testimonios</h2>
      <div className={styles.testimonios}>
        <blockquote>
          “Mi madre ha vuelto a andar con seguridad. El cambio, brutal.”
          <span>– Marta, hija</span>
        </blockquote>
        <blockquote>
          “Ahora no tengo miedo a caerme y espero a mi entrenador cada semana.”
          <span>– Paco, 81 años</span>
        </blockquote>
      </div>
    </section>
  );
}
