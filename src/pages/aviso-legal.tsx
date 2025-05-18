import Head from 'next/head';

export default function AvisoLegal() {
  return (
    <>
      <Head>
        <title>Aviso Legal | ANTEA</title>
      </Head>
      <main style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Aviso Legal</h1>
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, se informa:</p>
        <p><strong>Titular:</strong> ANTEA</p>
        <p><strong>Correo electrónico:</strong> contacto@antea.com (reemplaza con el real)</p>
        <p><strong>Actividad:</strong> Servicios de entrenamiento físico y acompañamiento para personas mayores a domicilio.</p>
        <p>Queda prohibido el uso indebido de los contenidos de este sitio web. El acceso y uso implica la aceptación de este aviso legal.</p>
      </main>
    </>
  );
}
