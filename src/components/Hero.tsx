import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Recupera a la persona <br />que siempre fue.
        </h1>
        <p className={styles.subtitle}>
          No es solo movilidad, es volver a verles sonreír, levantarse solos y sentirse vivos. <br />
          Entrenamiento funcional y compañía real para mayores. <br />
          Tú recuperas la paz. Ellos, la vida.
        </p>
        <a
          href="https://wa.me/34633261963"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Solicita tu sesión gratuita
        </a>
        <p className={styles.urgencia}>
          <strong>Solo 5 familias nuevas al mes. Si te importa, actúa ahora.</strong>
        </p>
      </div>
    </section>
  );
}
