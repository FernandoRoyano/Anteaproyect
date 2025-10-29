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
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Entrenador Personal Mayores Madrid | Ejercicio a Domicilio | ANTEA</title>
        <meta name="description" content="Recupera la movilidad y la vitalidad de tus padres o familiares senior. Entrenamiento funcional y acompañamiento emocional para adultos mayores, en casa o online. Solicita tu sesión gratuita y transforma su vida hoy." />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <Planes />
        <Testimonios />
        <Comparativa />
        <Contacto />
        <CTAFinal />
      </main>
      
      <Footer />
      <WhatsappButton />
      <CookieBanner />
    </>
  );
}
