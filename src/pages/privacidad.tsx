import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Privacidad.module.css';

export default function Privacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | ANTEA Salud</title>
        <meta name="description" content="Política de privacidad de ANTEA Salud. Información sobre la recopilación, uso y protección de tus datos personales conforme a la normativa vigente." />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Política de Privacidad</h1>
          <p className={styles.fecha}>Última actualización: Julio 2025</p>

          <section className={styles.section}>
            <h2>En ANTEA, S.L. valoramos tu privacidad</h2>
            <p>
              Nos comprometemos a proteger la privacidad y garantizar la seguridad de los datos personales de nuestros usuarios y clientes. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos tu información, cumpliendo con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD), y demás normativa española vigente en materia de protección de datos.
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Responsable:</strong> ANTEA, S.L.<br />
              <strong>CIF:</strong> 72171129G<br />
              <strong>Teléfono:</strong> 633 261 963<br />
              <strong>Email:</strong> <a href="mailto:privacidad@antea.com">privacidad@antea.com</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. ¿Qué datos recogemos?</h2>
            <ul>
              <li><strong>Datos identificativos:</strong> nombre, apellidos.</li>
              <li><strong>Datos de contacto:</strong> email, teléfono, dirección postal (si procede).</li>
              <li><strong>Datos facilitados por el usuario:</strong> información enviada en formularios (por ejemplo, mensajes o preferencias).</li>
              <li><strong>Datos de navegación:</strong> dirección IP, identificadores de dispositivos, cookies y similares. Consulta nuestra <a href="/politica-cookies">política de cookies</a>.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. ¿Con qué finalidad tratamos tus datos?</h2>
            <ul>
              <li>Gestionar solicitudes de información, consultas, contratación de servicios y comunicaciones comerciales.</li>
              <li>Enviarte información relevante sobre ANTEA, nuestros servicios o cambios legales.</li>
              <li>Mejorar la experiencia del usuario y la calidad de nuestro servicio.</li>
              <li>Cumplir con obligaciones legales, fiscales y administrativas.</li>
              <li>Gestionar la seguridad de la web y prevenir fraudes.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. ¿Por cuánto tiempo conservamos tus datos?</h2>
            <ul>
              <li>Mientras sean necesarios para la finalidad para la que fueron recogidos.</li>
              <li>Mientras exista una relación contractual/comercial y no solicites la supresión.</li>
              <li>Por obligación legal: mínimo 5 años para datos fiscales y contables.</li>
              <li>Hasta que retires tu consentimiento o solicites la supresión.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. ¿Cuál es la legitimación para el tratamiento?</h2>
            <ul>
              <li>Tu consentimiento expreso al rellenar formularios o marcar casillas.</li>
              <li>La ejecución de un contrato o precontrato.</li>
              <li>Obligaciones legales aplicables a ANTEA.</li>
              <li>El interés legítimo de ANTEA en mejorar el servicio y seguridad.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. ¿A quién se comunican tus datos?</h2>
            <p>
              No cedemos tus datos a terceros, salvo obligación legal o para la prestación del servicio (proveedores de hosting, email, formularios, sistemas de pago, y herramientas necesarias para la actividad, siempre bajo contrato de confidencialidad y cumpliendo el RGPD).
            </p>
            <p>
              Actualmente trabajamos con proveedores como: EmailJS (gestión de formularios), Google Workspace (correo y almacenamiento), [AÑADE LOS QUE USES].
            </p>
            <p>
              Tus datos no se transfieren fuera de la Unión Europea, salvo a países con nivel adecuado de protección reconocido por la Comisión Europea o con las garantías legales exigidas.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. ¿Cuáles son tus derechos?</h2>
            <ul>
              <li><strong>Acceso:</strong> Saber qué datos tuyos tratamos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar que eliminemos tus datos (derecho al olvido).</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para ciertas finalidades.</li>
              <li><strong>Limitación:</strong> Solicitar que limitemos el tratamiento de tus datos.</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado y transmitirlos a otro responsable.</li>
              <li><strong>Retirar tu consentimiento:</strong> En cualquier momento, sin afectar a tratamientos anteriores.</li>
            </ul>
            <p>
              Puedes ejercer tus derechos enviando un email a <a href="mailto:privacidad@antea.com">privacidad@antea.com</a>, adjuntando copia de tu DNI o documento identificativo, o por correo postal a nuestra dirección.<br />
              Si consideras que tus derechos no han sido respetados, puedes reclamar ante la <a href="https://www.aepd.es/">Agencia Española de Protección de Datos</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Seguridad y confidencialidad</h2>
            <p>
              En ANTEA adoptamos todas las medidas técnicas y organizativas razonables para proteger tus datos y evitar su alteración, pérdida, acceso o tratamiento no autorizado. Solo personal autorizado puede acceder a la información.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Comunicaciones comerciales</h2>
            <p>
              Solo recibirás comunicaciones comerciales si has dado tu consentimiento expreso. Puedes darte de baja en cualquier momento a través del enlace que aparece en cada email o contactando con nosotros.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Política de cookies</h2>
            <p>
              Esta web utiliza cookies propias y de terceros para analizar el tráfico y mejorar la experiencia de usuario. Consulta nuestra <a href="/politica-cookies">política de cookies</a> para más detalles y gestionar tus preferencias.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Cambios en la política de privacidad</h2>
            <p>
              ANTEA se reserva el derecho de modificar esta política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda revisarla periódicamente.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contacto</h2>
            <p>
              Para cualquier duda sobre esta política o el tratamiento de tus datos, puedes escribirnos a <a href="mailto:privacidad@antea.com">privacidad@antea.com</a> o llamarnos al 633 26 19 63.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
