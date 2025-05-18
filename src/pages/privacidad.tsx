import Head from 'next/head';

export default function PoliticaPrivacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | ANTEA</title>
      </Head>
      <main style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Política de Privacidad</h1>
        <p><strong>Responsable:</strong> ANTEA</p>
        <p><strong>Finalidad:</strong> Gestionar las solicitudes recibidas a través del formulario de contacto y prestar nuestros servicios de entrenamiento a domicilio.</p>
        <p><strong>Legitimación:</strong> Consentimiento del interesado.</p>
        <p><strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.</p>
        <p><strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.</p>
        <p><strong>Información adicional:</strong> Puedes consultar la información adicional y detallada sobre Protección de Datos en esta misma página.</p>
        <p><strong>Conservación:</strong> Los datos personales se conservarán el tiempo mínimo necesario para la gestión del servicio y cumplimiento de obligaciones legales.</p>
      </main>
    </>
  );
}
