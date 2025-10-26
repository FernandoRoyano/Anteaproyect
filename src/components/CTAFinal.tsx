import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.titulo}>
            ¿Tu Familiar Necesita Recuperar su Independencia?
          </h2>
          <p className={styles.descripcion}>
            Solo trabajamos con <strong>5 familias nuevas al mes</strong> porque cada persona 
            merece atención personalizada, no un servicio masivo.
            <br /><br />
            <strong>El momento de actuar es ahora.</strong> Cada día que pasa sin ejercicio 
            funcional es movilidad que se pierde para siempre.
          </p>

          <div className={styles.botones}>
            <a 
              href="https://wa.me/34633261963?text=Hola,%20quiero%20solicitar%20la%20evaluación%20gratuita%20de%20ejercicio%20para%20mi%20familiar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonPrincipal}
            >
              📱 WhatsApp: Evaluación GRATUITA
            </a>
            
            <a 
              href="#contacto" 
              className={styles.botonSecundario}
            >
              📧 O completa el formulario
            </a>
          </div>

          <div className={styles.garantia}>
            <p className={styles.garantiaTexto}>
              🛡️ <strong>Sin compromiso</strong> • Primera sesión gratuita • 
              Solo paga si ves resultados
            </p>
          </div>

          <div className={styles.urgencia}>
            <h3>⚠️ Importante: Tu decisión de hoy cambia el futuro de tu familia</h3>
            <p>
              Miles de personas mayores en Madrid pierden movilidad cada día por falta 
              de ejercicio especializado. <strong>No dejes que tu familiar sea uno más.</strong>
            </p>
          </div>

          <div className={styles.contactoInfo}>
            <p>📞 <strong>Llámanos:</strong> 633 261 963</p>
            <p>📍 <strong>Servicio:</strong> Madrid y alrededores (20km)</p>
            <p>⏰ <strong>Horario:</strong> L-V 9:00-19:00 | Sáb 9:00-13:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
