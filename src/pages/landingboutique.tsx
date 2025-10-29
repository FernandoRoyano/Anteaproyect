// src/pages/landing-boutique.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Usa la ruta relativa a la subcarpeta 'landing'
import HeroLanding from '@/components/landing/HeroLanding';
import PlanesLanding from '@/components/landing/PlanesLanding';
import ComparativaLanding from '@/components/landing/ComparativaLanding';
import CTAFinalLanding from '@/components/landing/CTAFinalLanding';
import ContactoLanding from '@/components/landing/ContactoLanding';

export default function LandingBoutique() {
  return (
    <>
      <Head>
        <title>Landing Boutique ANTEA Salud | Ejercicio Personalizado Madrid</title>
        <meta name="description" content="Oferta boutique de ejercicio funcional para mayores. Atención personalizada solo para 5 nuevas familias al mes. Evaluación gratuita." />
        <link rel="canonical" href="https://anteasalud.com/landing-boutique" />
      </Head>
      <HeroLanding />
      <PlanesLanding />
      <ComparativaLanding />
      <CTAFinalLanding />
      <ContactoLanding />
      <Footer />
    </>
  );
}
