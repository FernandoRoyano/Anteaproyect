import styles from './Planes.module.css';

type Plan = {
  nombre: string;
  precio: string;
  sesiones: string;
  duracion: string;
  destacado?: boolean;
};

const planes: Plan[] = [
  { nombre: 'Base', precio: '297€', sesiones: '2/semana', duracion: '30 min' },
  { nombre: 'Plus', precio: '397€', sesiones: '3/semana', duracion: '30 min', destacado: true },
  { nombre: 'Premium', precio: '497€', sesiones: '3/semana', duracion: '45 min' },
  { nombre: 'Online', precio: '197€', sesiones: '2/semana', duracion: '30 min' },
];

export default function Planes() {
  return (
    <section id="planes" className={styles.planes}>
      <h2 className={styles.titulo}>Elige el plan que se adapta a tu familia</h2>
      <div className={styles.grid}>
        {planes.map((plan) => (
          <div
            key={plan.nombre}
            className={`${styles.card} ${plan.destacado ? styles.destacado : ''}`}
          >
            {plan.destacado && <div className={styles.etiqueta}>Más elegido</div>}
            <h3>Plan {plan.nombre}</h3>
            <p className={styles.precio}><strong>{plan.precio}</strong></p>
            <p>{plan.sesiones} – {plan.duracion}</p>
            <ul>
              <li>Evaluación inicial</li>
              <li>Informe semanal</li>
              <li>Soporte por WhatsApp</li>
            </ul>
            <button className={styles.boton}>Empezar ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
}
