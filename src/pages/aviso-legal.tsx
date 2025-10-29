import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/AvisoLegal.module.css';

export default function AvisoLegal() {
  return (
    <>
      <Head>
        <title>Aviso Legal | ANTEA Salud</title>
        <meta name="description" content="Aviso legal de ANTEA Salud. Términos y condiciones de uso del sitio web." />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Aviso Legal</h1>
          <p className={styles.fecha}>Última actualización: 29 de octubre de 2025</p>

          <section className={styles.section}>
            <h2>1. Identificación del responsable del sitio web</h2>
            <p>
              Titular del sitio web: <strong>Fernando Royano Cabrero</strong><br />
              Nombre comercial: <strong>ANTEA SALUD</strong><br />
              Actividad: Entrenamiento Personal Especializado en Ejercicio Funcional para Mayores<br />
              Email: info@anteasalud.com<br />
              Teléfono: 633 261 963<br />
              Ubicación: Madrid, España
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Condiciones de uso</h2>
            <p>
              Acceder y usar este sitio web implica la aceptación de las siguientes condiciones:
            </p>
            <ul>
              <li>El usuario se compromete a utilizar el sitio de forma lícita y respetuosa</li>
              <li>Queda prohibido copiar, distribuir o modificar sus contenidos sin permiso</li>
              <li>El titular se reserva el derecho de suspender el acceso por usos indebidos</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Propiedad intelectual</h2>
            <p>
              Los contenidos, imágenes, logotipos y diseños del sitio web son propiedad de ANTEA Salud, o se utilizan con licencia.
              No pueden ser reproducidos, distribuidos ni transmitidos sin autorización expresa.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Exclusión de garantías y responsabilidad</h2>
            <p>
              ANTEA Salud no puede garantizar la disponibilidad permanente del sitio ni que los contenidos estén libres de errores.
              El titular no se responsabiliza de cualquier daño derivado del uso del sitio web, ni de la aplicación de los contenidos aquí presentados en casos individuales.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Enlaces externos</h2>
            <p>
              Este sitio puede contener enlaces a páginas de terceros. ANTEA Salud no controla ni responde del contenido o funcionamiento de dichas páginas externas.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Protección de datos personales</h2>
            <p>
              Los datos personales recabados en este sitio se tratan conforme a la <a href="/privacidad">Política de Privacidad</a>. El usuario puede ejercer sus derechos legales contactando por email (info@anteasalud.com).
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Ley aplicable y jurisdicción</h2>
            <p>
              El uso de este sitio se rige por la legislación española. Para cualquier conflicto derivado de este aviso, las partes se someten a los tribunales de Madrid, España.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Modificaciones del aviso legal</h2>
            <p>
              ANTEA Salud se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios se publicarán en esta página junto a la fecha de "Última actualización".
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Contacto legal</h2>
            <p>
              Para cualquier consulta relacionada con este aviso legal, contacta por:<br />
              Email: info@anteasalud.com<br />
              Teléfono: 633 261 963<br />
              Dirección: Madrid, España
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
