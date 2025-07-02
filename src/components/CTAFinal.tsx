import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Solo 5 familias nuevas al mes</h2>
          <p>
            No somos una fábrica de números. <br />
            Trabajamos con pocas familias porque preferimos calidad antes que cantidad. <br />
            <strong>Si de verdad te importa, actúa ya. Tu familia merece lo mejor.</strong>
          </p>
          <a href="#contacto" className={styles.boton}>
            Solicitar sesión gratuita
          </a>
          <p className={styles.aviso}>
            <strong>La diferencia entre moverse ahora o esperar puede ser irreparable.<br />
            Hazlo hoy, y que tu familia te lo agradezca mañana.</strong>
          </p>
          <p style={{ textAlign: 'center', marginTop: 12 }}>
            ¿Prefieres WhatsApp?{" "}
            <a
              href="https://wa.me/34666666666?text=Hola%20quiero%20más%20info%20sobre%20ANTEA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWhatsapp}
            >
              Haz clic aquí y háblanos directo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
