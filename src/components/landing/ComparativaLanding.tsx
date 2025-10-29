import styles from './ComparativaLanding.module.css';

export default function ComparativaLanding() {
  return (
    <section className={styles.section}>
      <h2>ANTEASALUD vs. servicios tradicionales</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>ANTEASALUD</th>
              <th>Otros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personalización real</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Profesionales titulados</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Evaluación gratuita</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Resultados medibles</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
