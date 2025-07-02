import styles from './Comparativa.module.css';

export default function Comparativa() {
  return (
    <section className={styles.comparativa}>
      <h2 className={styles.titulo}>¿Por qué ANTEA no tiene rival?</h2>
      <p className={styles.intro}>
        Hay dos tipos de servicios para mayores: los que simplemente “vigilan” y los que DEVUELVEN VIDA.<br />
        <strong>ANTEA es el único que transforma de verdad. El resto solo pasan el tiempo.</strong>
      </p>
      <div className={styles.tabla}>
        <div className={`${styles.fila} ${styles.encabezado}`}>
          <div>Servicio</div>
          <div>ANTEA</div>
          <div>Cuidador tradicional</div>
        </div>
        <div className={styles.fila}>
          <div>Entrenamiento físico guiado</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Informe semanal claro y humano</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Seguimiento emocional real</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
        <div className={styles.fila}>
          <div>Soporte directo y personal</div>
          <div>✔️</div>
          <div>⚠️</div>
        </div>
        <div className={styles.fila}>
          <div>Garantía de resultados visibles</div>
          <div>✔️</div>
          <div>❌</div>
        </div>
      </div>
      <p className={styles.remate}>
        Si de verdad quieres que tu familia viva mejor, la elección es fácil.<br />
        <strong>Elige ANTEA y no mires atrás.</strong>
      </p>
    </section>
  );
}
