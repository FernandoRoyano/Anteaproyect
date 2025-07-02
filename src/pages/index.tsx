import Head from 'next/head';
import Hero from '../components/Hero';
import Planes from '../components/Planes';
import Testimonios from '@/components/Testimonios';
import Comparativa from '@/components/Comparativa';
import Contacto from '../components/Contacto';
import CTAFinal from '../components/CTAFinal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import CookieBanner from '@/components/CookieBanner'; // <--- AÑADE ESTA LÍNEA

export default function Home() {
  return (
    <>
      <Head>
        <title>ANTEA - Cuidado para mayores</title>
        <meta name="description" content="Entrenamiento funcional y compañía emocional para mayores." />
      </Head>
      <main>
        <Header />        
        <Hero />
        <Planes />
        <Testimonios />
        <Comparativa />
        <Contacto />
        <CTAFinal />
        <WhatsappButton />
        <Footer />
        <CookieBanner /> {/* <--- AÑADE EL BANNER AQUÍ */}
      </main>
    </>
  );
}
