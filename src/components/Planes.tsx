import styles from './Planes.module.css';

type Plan = {
  nombre: string;
  precio: string;
  sesiones: string;
  duracion: string;
  destacado?: boolean;
  extras?: string[];
  tagline?: string;
  precioSesion?: string;
  ahorro?: string;
};

const planes: Plan[] = [
  {
    nombre: 'Programa Básico de Ejercicio para Mayores',
    precio: '130€',
    precioSesion: '32.50€/sesión',
    ahorro: 'Ahorro 10€',
    sesiones: '4 sesiones',
    duracion: '30 min c/u',
    tagline: 'Perfecto para empezar a recuperar movilidad y fuerza',
    extras: [
      'Evaluación inicial gratuita',
      'Plan personalizado de ejercicios',
      'Seguimiento semanal por WhatsApp',
    ],
  },
  {
    nombre: 'Programa Integral de Movilidad',
    precio: '250€',
    precioSesion: '31.25€/sesión',
    ahorro: 'Ahorro 30€',
    sesiones: '8 sesiones',
    duracion: '30 min c/u',
    destacado: true,
    tagline: 'El más elegido - Resultados visibles en 4 semanas',
    extras: [
      'Evaluación inicial + seguimiento',
      'Informes quincenales para la familia',
      'Soporte WhatsApp prioritario',
      'Garantía de satisfacción',
    ],
  },
  {
    nombre: 'Programa Premium de Rehabilitación',
    precio: '420€',
    precioSesion: '35€/sesión',
    sesiones: '12 sesiones',
    duracion: '45 min c/u',
    tagline: 'Recuperación completa - Para casos más complejos',
    extras: [
      'Evaluación funcional completa',
      'Sesiones extendidas a 45 minutos',
      'Informes médicos detallados',
      'Coordinación con fisioterapeuta',
      'Seguimiento familiar mensual',
    ],
  }
];

// Plan online más realista
const planOnline = {
  nombre: 'Programa Online para Mayores',
  precio: '89€',
  tagline: 'Ejercicio guiado desde casa con seguimiento profesional',
  extras: [
    'Sesiones en vivo por videollamada',
    'Plan de ejercicios personalizado',
    'Soporte diario por WhatsApp',
    'Perfecto si vives lejos de Madrid',
  ],
};

export default function Planes() {
  return (
    <section id="planes" className={styles.planes}>
      <h2 className={styles.titulo}>
        Programas de Ejercicio Funcional para Personas Mayores en Madrid
      </h2>
      <p className={styles.subtitulo}>
        Servicio a domicilio con profesional titulado. Solo 5 nuevas familias al mes.
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
            <h3>{plan.nombre}</h3>
            {plan.tagline && <p className={styles.tagline}>{plan.tagline}</p>}
            
            <div className={styles.precioContainer}>
              <p className={styles.precio}>
                <strong>{plan.precio}</strong>
              </p>
              {plan.precioSesion && (
                <p className={styles.precioSesion}>{plan.precioSesion}</p>
              )}
              {plan.ahorro && (
                <p className={styles.ahorro}>{plan.ahorro}</p>
              )}
            </div>
            
            <p className={styles.sesionesInfo}>
              {plan.sesiones} • {plan.duracion}
            </p>
            
            <ul>
              <li>Primera valoración gratuita</li>
              <li>Ejercicio personalizado en casa</li>
              <li>Material profesional incluido</li>
              {plan.extras?.map((extra, i) => (
                <li key={i}>{extra}</li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20el%20programa%20de%20ejercicio%20para%20mayores"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.boton}
            >
              Solicitar información
            </a>
          </div>
        ))}
      </div>

      {/* BLOQUE ONLINE MEJORADO */}
      <div className={styles.onlineBlock}>
        <div className={styles.onlineHeader}>
          <span className={styles.onlineTag}>¿Vives lejos de Madrid?</span>
          <span className={styles.onlineDisponible}>También disponible online</span>
        </div>
        <h4>Programa Online para Mayores</h4>
        <p className={styles.onlineDesc}>
          Ejercicio funcional guiado en tiempo real por videollamada.
          <br />
          <span className={styles.onlineNota}>Perfecto para familias en otras ciudades.</span>
        </p>
        <ul className={styles.onlineExtras}>
          {planOnline.extras.map((extra, i) => (
            <li key={i}>✅ {extra}</li>
          ))}
        </ul>
        <div className={styles.onlinePrecio}><b>{planOnline.precio}</b> al mes</div>
        <a
          href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20el%20programa%20online%20de%20ejercicio%20para%20mayores"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botonSecundario}
        >
          Consultar programa online
        </a>
      </div>

      <div className={styles.beneficiosSection}>
        <h3>¿Por qué elegir ANTEA para el ejercicio de personas mayores?</h3>
        <div className={styles.beneficiosGrid}>
          <div className={styles.beneficio}>
            <span className={styles.beneficioIcon}>🏠</span>
            <p><strong>En casa</strong><br/>Sin desplazamientos ni riesgos</p>
          </div>
          <div className={styles.beneficio}>
            <span className={styles.beneficioIcon}>👨‍⚕️</span>
            <p><strong>Profesional titulado</strong><br/>Especializado en mayores</p>
          </div>
          <div className={styles.beneficio}>
            <span className={styles.beneficioIcon}>📊</span>
            <p><strong>Resultados medibles</strong><br/>Seguimiento objetivo del progreso</p>
          </div>
          <div className={styles.beneficio}>
            <span className={styles.beneficioIcon}>🔬</span>
            <p><strong>Método científico</strong><br/>Basado en evidencia (Vivifrail)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
