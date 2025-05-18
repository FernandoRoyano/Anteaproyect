import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Para que vuelvan a ser quienes eran.</h1>
        <p className={styles.subtitle}>
          Entrenamiento funcional y compañía emocional para personas mayores.
          Tú recuperas la tranquilidad. Ellos, su movilidad.
        </p>
        <button className={styles.button}>Solicita tu sesión gratuita</button>
      </div>
    </section>
  );
}
