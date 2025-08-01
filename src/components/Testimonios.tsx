import Image from 'next/image';
import styles from './Testimonios.module.css';

const testimonios = [
  {
    nombre: 'Marta',
    texto: 'Mi padre llevaba meses sin caminar solo. En 2 semanas con ANTEA volvió a moverse y en un mes, a salir al parque. Volvimos a tener esperanza.',
    rol: 'Hija de usuario ANTEA',
    imagen: '/testimonios/Marta.png',
  },
  {
    nombre: 'Carlos',
    texto: 'Ver cómo mi madre recuperó movilidad y alegría me devolvió la tranquilidad que necesitaba. ANTEA ha sido un antes y después.',
    rol: 'Hijo de usuaria ANTEA',
    imagen: '/testimonios/Carlos.png',
  },
  {
    nombre: 'Ana',
    texto: 'Al principio dudábamos. Ahora no podemos estar más agradecidos. El trato humano y los resultados físicos son evidentes.',
    rol: 'Sobrina de usuario ANTEA',
    imagen: '/testimonios/Ana.png',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className={styles.testimonios}>
      <h2 className={styles.titulo}>¿Dudas? Lee esto antes de decidir</h2>
      <p className={styles.microcopy}>
        Familias reales, resultados que se ven y se sienten. Ellos ya dieron el paso. ¿Y tú?
      </p>
      <div className={styles.grid}>
        {testimonios.map((t, i) => (
          <blockquote key={i} className={styles.card}>
            <Image
              src={t.imagen}
              alt={t.nombre}
              width={60}
              height={60}
              className={styles.avatar}
            />
            <p className={styles.texto}>“{t.texto}”</p>
            <footer className={styles.autor}>– {t.nombre}, {t.rol}</footer>
          </blockquote>
        ))}
      </div>
      <p className={styles.llamada}>
        No eres el primero, pero sí puedes ser el siguiente. <strong>Solicita tu sesión gratuita y que tu historia sea la próxima.</strong>
      </p>
    </section>
  );
}
