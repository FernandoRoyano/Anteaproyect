// src/components/PlanesLanding.tsx
import styles from './PlanesLanding.module.css';

export default function PlanesLanding() {
  return (
    <section className={styles.section}>
      <h2>Planes y tarifas</h2>
      <div className={styles.planes}>
        <div className={styles.card}>
          <h3>Básico</h3>
          <p>2 sesiones/semana</p>
          <p>Material y seguimiento incluidos</p>
        </div>
        <div className={styles.card}>
          <h3>Intensivo</h3>
          <p>3 sesiones/semana</p>
          <p>Rehabilitación rápida</p>
        </div>
        <div className={styles.card}>
          <h3>Familiar</h3>
          <p>Sesiones en pareja</p>
          <p>Descuento especial</p>
        </div>
      </div>
    </section>
  );
}
