import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Solo 5 familias nuevas al mes</h2>
          <p>
            Agendamos pocas familias para mantener la calidad.
            Solicita tu sesión gratuita y empieza a cuidar como tu madre merece.
          </p>
          <a href="#contacto" className={styles.boton}>
            Solicitar sesión gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
