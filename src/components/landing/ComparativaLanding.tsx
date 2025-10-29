import styles from './ComparativaLanding.module.css';

export default function ComparativaLanding() {
  return (
    <section className={styles.section}>
      <h2>¿Por qué elegir ANTEASALUD?</h2>
      <p className={styles.subtitle}>
        No somos un servicio más. Somos tu mejor decisión.
      </p>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Característica</th>
              <th className={styles.highlight}>ANTEASALUD</th>
              <th>Otros servicios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personalización real</td>
              <td className={styles.pro}>✅ Siempre</td>
              <td className={styles.con}>❌ Raramente</td>
            </tr>
            <tr>
              <td>Profesionales titulados</td>
              <td className={styles.pro}>✅ 100%</td>
              <td className={styles.con}>❌ No garantizado</td>
            </tr>
            <tr>
              <td>Evaluación gratuita</td>
              <td className={styles.pro}>✅ Sin compromiso</td>
              <td className={styles.con}>❌ No ofrecen</td>
            </tr>
            <tr>
              <td>Resultados medibles</td>
              <td className={styles.pro}>✅ Desde semana 1</td>
              <td className={styles.con}>❌ Inexistente</td>
            </tr>
            <tr>
              <td>Atención boutique</td>
              <td className={styles.pro}>✅ Solo 5 familias/mes</td>
              <td className={styles.con}>❌ Servicio masivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
