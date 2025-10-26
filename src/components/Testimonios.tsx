import styles from './Testimonios.module.css';

const testimonios = [
  {
    caso: 'Recuperación post-operación cadera',
    texto: 'Después de la operación de cadera, mi madre no podía caminar sola. Con el programa de ejercicio personalizado de ANTEA, en 6 semanas volvió a ser independiente.',
    resultado: 'Recuperó movilidad completa',
    tiempo: '6 semanas',
    edad: '78 años',
    ubicacion: 'Madrid',
    icono: '🚶‍♀️'
  },
  {
    caso: 'Prevención de caídas',
    texto: 'Mi padre había tenido 2 caídas en casa. Desde que empezó con ANTEA no ha vuelto a caerse. Su equilibrio y confianza han mejorado muchísimo.',
    resultado: 'Cero caídas en 8 meses',
    tiempo: '8 meses sin caídas',
    edad: '82 años',
    ubicacion: 'Las Rozas',
    icono: '⚖️'
  },
  {
    caso: 'Recuperación fuerza muscular',
    texto: 'Llevaba meses sin poder levantarse del sofá sin ayuda. El entrenador de ANTEA diseñó ejercicios específicos. Ahora se levanta sola y camina 20 minutos diarios.',
    resultado: 'Independencia total recuperada',
    tiempo: '4 semanas',
    edad: '85 años',
    ubicacion: 'Pozuelo',
    icono: '💪'
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className={styles.testimonios}>
      <h2 className={styles.titulo}>
        Casos Reales de Ejercicio Funcional para Mayores en Madrid
      </h2>
      <p className={styles.microcopy}>
        Resultados documentados de nuestros programas de ejercicio a domicilio
      </p>
      
      <div className={styles.grid}>
        {testimonios.map((testimonio, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.casoHeader}>
              <span className={styles.icono}>{testimonio.icono}</span>
              <div className={styles.casoInfo}>
                <h3 className={styles.casoTitulo}>{testimonio.caso}</h3>
                <div className={styles.metadatos}>
                  {testimonio.edad} • {testimonio.ubicacion} • {testimonio.tiempo}
                </div>
              </div>
            </div>
            
            <blockquote className={styles.texto}>
              "{testimonio.texto}"
            </blockquote>
            
            <div className={styles.resultado}>
              <strong>Resultado:</strong> {testimonio.resultado}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.estadisticas}>
        <h3>Estadísticas del Programa ANTEA</h3>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>90%</span>
            <p>Mejoran su movilidad en 4 semanas</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>95%</span>
            <p>Evitan caídas durante el programa</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>6-8</span>
            <p>Semanas promedio de recuperación</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <p>Satisfacción de las familias</p>
          </div>
        </div>
      </div>
      
      <div className={styles.llamada}>
        <h3>¿Tu familiar necesita recuperar movilidad?</h3>
        <p>Únete a las familias que ya han visto resultados con nuestro programa de ejercicio funcional</p>
        <a 
          href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20el%20programa%20de%20ejercicio%20para%20mi%20familiar%20mayor"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botonCTA}
        >
          Solicitar evaluación gratuita
        </a>
      </div>
    </section>
  );
}
