import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import CookieBanner from '@/components/CookieBanner'; // ⚡ AÑADIR ESTA LÍNEA

const inter = Inter({ subsets: ['latin'], variable: '--fuente-principal' });

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  // Evitar SSR hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
      {/* Banner de cookies - solo se renderiza después del mount */}
      {mounted && <CookieBanner />}
    </div>
  );
}
