import styles from './Comparativa.module.css';

const comparaciones = [
  {
    aspecto: "Enfoque Especializado",
    antea: "100% personas mayores + ejercicio funcional",
    competencia: "Entrenan todas las edades / Solo supervisión",
    anteaIcon: "✅",
    compIcon: "❌"
  },
  {
    aspecto: "Metodología",
    antea: "Protocolo Vivifrail + evidencia científica",
    competencia: "Ejercicios genéricos / Sin programa específico",
    anteaIcon: "✅",
    compIcon: "⚠️"
  },
  {
    aspecto: "Seguimiento",
    antea: "WhatsApp 24/7 + informes familiares",
    competencia: "Solo durante sesión / Comunicación básica",
    anteaIcon: "✅",
    compIcon: "❌"
  },
  {
    aspecto: "Prevención Caídas",
    antea: "Protocolo específico de equilibrio",
    competencia: "Ejercicio general / Solo supervisión",
    anteaIcon: "✅",
    compIcon: "❌"
  },
  {
    aspecto: "Coste Mensual",
    antea: "250€ (8 sesiones) = 31.25€/sesión",
    competencia: "400€+ fisio / 1000€+ cuidador",
    anteaIcon: "✅",
    compIcon: "❌"
  },
  {
    aspecto: "Material Incluido",
    antea: "Todo el material profesional incluido",
    competencia: "Material básico / No incluido",
    anteaIcon: "✅",
    compIcon: "⚠️"
  }
];

export default function Comparativa() {
  return (
    <section className={styles.comparativa}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          ¿Por qué elegir ANTEA frente a otras opciones para mayores en Madrid?
        </h2>
        <p className={styles.intro}>
          Comparación honesta: nuestro programa de ejercicio funcional vs. alternativas comunes
        </p>

        <div className={styles.tablaWrapper}>
          <div className={styles.tabla}>
            {/* Encabezado */}
            <div className={`${styles.fila} ${styles.encabezado}`}>
              <div className={styles.celda}>Aspecto</div>
              <div className={`${styles.celda} ${styles.anteaHeader}`}>
                <strong>ANTEA SALUD</strong>
                <span>Especialista en Ejercicio</span>
              </div>
              <div className={styles.celda}>
                <strong>Otras opciones</strong>
                <span>Fisio/Cuidador tradicional</span>
              </div>
            </div>

            {/* Filas de comparación */}
            {comparaciones.map((comp, i) => (
              <div key={i} className={styles.fila}>
                <div className={`${styles.celda} ${styles.aspecto}`}>
                  <strong>{comp.aspecto}</strong>
                </div>
                <div className={`${styles.celda} ${styles.anteaCell}`}>
                  <span className={styles.icono}>{comp.anteaIcon}</span>
                  <span className={styles.texto}>{comp.antea}</span>
                </div>
                <div className={styles.celda}>
                  <span className={styles.icono}>{comp.compIcon}</span>
                  <span className={styles.texto}>{comp.competencia}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.resumen}>
          <h3>En resumen: ANTEA es la única opción 100% especializada</h3>
          <div className={styles.resumenGrid}>
            <div className={styles.resumenItem}>
              <span className={styles.resumenIcon}>🎯</span>
              <p><strong>Único especialista</strong> en ejercicio funcional para mayores en Madrid</p>
            </div>
            <div className={styles.resumenItem}>
              <span className={styles.resumenIcon}>💰</span>
              <p><strong>Mejor precio</strong> que fisio (31€/sesión vs 45-60€)</p>
            </div>
            <div className={styles.resumenItem}>
              <span className={styles.resumenIcon}>📱</span>
              <p><strong>Seguimiento 24/7</strong> por WhatsApp + informes</p>
            </div>
            <div className={styles.resumenItem}>
              <span className={styles.resumenIcon}>🔬</span>
              <p><strong>Método científico</strong> Vivifrail probado</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h3>¿Tu familiar merece lo mejor?</h3>
          <p>No conformes con soluciones genéricas. Prueba el único programa especializado en Madrid.</p>
          <a 
            href="https://wa.me/34633261963?text=Quiero%20comparar%20ANTEA%20con%20otras%20opciones%20para%20mi%20familiar%20mayor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botonCTA}
          >
            Evaluación gratuita sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
}
