// src/pages/politica-cookies.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/PoliticaCookies.module.css';

export default function PoliticaCookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | ANTEA Salud</title>
        <meta name="description" content="Política de cookies de ANTEA Salud. Información sobre el uso de cookies en nuestro sitio web." />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Política de Cookies</h1>
          <p className={styles.fecha}>Última actualización: 29 de octubre de 2025</p>

          <section className={styles.section}>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) 
              cuando visitas un sitio web. Se utilizan para mejorar la experiencia de navegación, recordar tus preferencias 
              y proporcionar información sobre el uso del sitio.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. ¿Qué cookies utilizamos?</h2>
            
            <h3>Cookies esenciales</h3>
            <p>
              Son necesarias para el funcionamiento básico del sitio web. Sin ellas, no podríamos ofrecerte servicios básicos 
              como la navegación por el sitio o el acceso a áreas seguras.
            </p>
            <ul>
              <li><strong>cookies_accepted:</strong> Recuerda tu elección sobre las cookies (duración: 1 año)</li>
            </ul>

            <h3>Cookies analíticas</h3>
            <p>
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando información de forma anónima. 
              Utilizamos esta información para mejorar el funcionamiento de nuestro sitio.
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Recopila datos sobre páginas visitadas, tiempo de navegación y origen del tráfico</li>
            </ul>

            <h3>Cookies de terceros</h3>
            <p>
              Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas:
            </p>
            <ul>
              <li><strong>WhatsApp:</strong> Para facilitar el contacto directo mediante el widget de chat</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. ¿Cómo gestionar las cookies?</h2>
            <p>
              Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están en tu 
              dispositivo y puedes configurar la mayoría de los navegadores para que no se almacenen.
            </p>
            <p>
              <strong>Gestión desde tu navegador:</strong>
            </p>
            <ul>
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies y permisos de sitio</li>
            </ul>
            <p>
              Ten en cuenta que si desactivas las cookies, es posible que algunas funciones del sitio web no funcionen correctamente.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Cambios en la política de cookies</h2>
            <p>
              Podemos actualizar nuestra Política de Cookies ocasionalmente. Te notificaremos cualquier cambio publicando 
              la nueva política en esta página con una fecha de "última actualización" revisada.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos:
            </p>
            <ul>
              <li><strong>Teléfono:</strong> 633 261 963</li>
              <li><strong>Email:</strong> info@anteasalud.com</li>
              <li><strong>Dirección:</strong> Madrid, España</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
