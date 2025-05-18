import styles from './Comparativa.module.css';

export default function Comparativa() {
  return (
    <section className={styles.comparativa}>
      <h2 className={styles.titulo}>¿Por qué ANTEA es diferente?</h2>
      <div className={styles.tabla}>
        <div className={`${styles.fila} ${styles.encabezado}`}>
          <div>Servicio</div>
          <div>ANTEA</div>
          <div>Cuidadores</div>
        </div>

        <div className={styles.fila}>
          <div>Entrenamiento físico</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Informe semanal</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Seguimiento emocional</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Soporte directo</div>
          <div>✔️</div>
          <div>⚠️</div>
        </div>
      </div>
    </section>
  );
}
