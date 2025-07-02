import styles from './Planes.module.css';

type Plan = {
  nombre: string;
  precio: string;
  sesiones: string;
  duracion: string;
  destacado?: boolean;
  extras?: string[];
  tagline?: string; // Slogan corto y emocional para cada plan
};

const planes: Plan[] = [
  {
    nombre: 'Rejuvenece',
    precio: '297€',
    sesiones: '2/semana',
    duracion: '30 min',
    tagline: 'Recupera vitalidad y movimiento en semanas.',
    extras: [
      'Evaluación inicial con vídeo para la familia',
      'Grupo privado para familiares',
      'Soporte WhatsApp premium',
    ],
  },
  {
    nombre: 'Tranquilidad Total',
    precio: '397€',
    sesiones: '3/semana',
    duracion: '30 min',
    destacado: true,
    tagline: 'Tu familia duerme tranquila, tus padres recuperan su vida.',
    extras: [
      'Sesión familiar mensual (Zoom o llamada grupal)',
      'Garantía devolución 30 días',
      'Grupo privado para familiares',
    ],
  },
  {
    nombre: 'Premium Sin Límites',
    precio: '497€',
    sesiones: '3/semana',
    duracion: '45 min',
    tagline: 'El cambio definitivo. Para familias que no se conforman.',
    extras: [
      'Vídeo informe semanal personalizado',
      '1 sesión de fisioterapia/mes incluida',
      'Acceso a talleres online exclusivos',
    ],
  }
];

// Info del plan online como bloque aparte
const planOnline = {
  nombre: 'Conecta Online',
  precio: '197€',
  tagline: 'Resultados sin salir de casa. Perfecto para familias lejos.',
  extras: [
    'Sesiones 100% online',
    'Informe semanal digital',
    'Soporte WhatsApp',
  ],
};

export default function Planes() {
  return (
    <section id="planes" className={styles.planes}>
      <h2 className={styles.titulo}>
        Elige el plan que le cambiará la vida a tu familia
      </h2>
      <p className={styles.subtitulo}>
        Solo 5 familias nuevas cada mes. Si de verdad te importa, actúa ya.
      </p>
      <div className={styles.grid}>
        {planes.map((plan) => (
          <div
            key={plan.nombre}
            className={`${styles.card} ${plan.destacado ? styles.destacado : ''}`}
          >
            {plan.destacado && (
              <div className={styles.etiqueta}>Más elegido</div>
            )}
            <h3>Plan {plan.nombre}</h3>
            {plan.tagline && <p className={styles.tagline}>{plan.tagline}</p>}
            <p className={styles.precio}>
              <strong>{plan.precio}</strong>
            </p>
            <p>
              {plan.sesiones} – {plan.duracion}
            </p>
            <ul>
              <li>Evaluación inicial</li>
              <li>Informe semanal</li>
              <li>Soporte por WhatsApp</li>
              {plan.extras?.map((extra, i) => (
                <li key={i}>{extra}</li>
              ))}
            </ul>
            <a href="#contacto" className={styles.boton}>
              Empezar ahora
            </a>
          </div>
        ))}
      </div>

      {/* BLOQUE ONLINE */}
      <div className={styles.onlineBlock}>
        <div className={styles.onlineHeader}>
          <span className={styles.onlineTag}>¿Vives lejos de tus padres?</span>
          <span className={styles.onlineDisponible}>También online</span>
        </div>
        <p className={styles.onlineDesc}>
          Resultados sin salir de casa.<br />
          <span className={styles.onlineNota}>Perfecto para familias lejos.</span>
        </p>
        <ul className={styles.onlineExtras}>
          <li>✅ Sesiones 100% online</li>
          <li>✅ Informe semanal digital</li>
          <li>✅ Soporte WhatsApp</li>
        </ul>
        <div className={styles.onlinePrecio}><b>197€</b> al mes</div>
        <a
         href="https://wa.me/34633261963"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botonSecundario}
        >
          Solicitar info del plan online
        </a>
      </div>

      <p className={styles.comparativa}>
        ¿Vas a dejar la salud de tus padres en manos de un cuidador que solo “vigila”? ANTEA transforma vidas.
      </p>
    </section>
  );
}
