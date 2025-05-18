import Head from 'next/head';

export default function PoliticaCookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | ANTEA</title>
      </Head>
      <main style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Política de Cookies</h1>
        <p>Este sitio web no utiliza cookies propias ni de terceros con fines publicitarios.</p>
        <p>Solo se pueden usar cookies técnicas necesarias para el funcionamiento básico de la web.</p>
        <p>Si en el futuro se integran herramientas de análisis o publicidad, se solicitará el consentimiento del usuario conforme al RGPD y la Ley de Cookies.</p>
      </main>
    </>
  );
}
