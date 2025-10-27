import { GetStaticPaths, GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { marked } from 'marked';
import { getPostBySlug, getAllPosts, Post } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/BlogPost.module.css';

interface BlogPostProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReading, setIsReading] = useState(false);

  // Progress bar de lectura
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      setIsReading(scrollTop > 200 && progress < 90);
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Compartir en redes sociales
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`;
    window.open(url, '_blank');
  };

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post no encontrado</h1>
        <Link href="/blog" className={styles.backToBlog}>← Volver al blog</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Blog ANTEA</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, ejercicio mayores, salud, ANTEA`} />
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://anteasalud.com/blog/${post.slug}`} />
      </Head>

      <Header />

      {/* Progress bar */}
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating navigation (en lectura) */}
      {isReading && (
        <nav className={styles.floatingNav} aria-label="floating navigation">
          <Link href="/blog" className={styles.floatingBack}>
            ← Blog
          </Link>
          <div className={styles.floatingShare}>
            <button 
              onClick={shareOnTwitter} 
              className={styles.shareBtn}
              aria-label="Compartir en Twitter"
            >
              🐦
            </button>
            <button 
              onClick={shareOnLinkedIn} 
              className={styles.shareBtn}
              aria-label="Compartir en LinkedIn"
            >
              💼
            </button>
            <button 
              onClick={shareOnWhatsApp} 
              className={styles.shareBtn}
              aria-label="Compartir en WhatsApp"
            >
              💬
            </button>
          </div>
        </nav>
      )}

      <article className={styles.article}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="breadcrumbs">
          <Link href="/">Inicio</Link>
          <span>→</span>
          <Link href="/blog">Blog</Link>
          <span>→</span>
          <span className={styles.currentPage}>{post.category || 'Artículo'}</span>
        </nav>

        {/* Header del artículo */}
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={styles.category}>{post.category || 'General'}</span>
            <time className={styles.date}>{post.date}</time>
            {post.readingTime && (
              <span className={styles.readingTime}>⏱️ {post.readingTime} min de lectura</span>
            )}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                👨‍⚕️
              </div>
              <div>
                <p className={styles.authorName}>{post.author || 'Equipo ANTEA'}</p>
                <p className={styles.authorRole}>Especialista en Ejercicio Funcional</p>
              </div>
            </div>
          </div>
          {/* Imagen destacada */}
          {post.image && (
            <div className={styles.featuredImage}>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                priority
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )}
        </header>

        {/* Contenido del artículo */}
        <div className={styles.content}>
          <div 
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: marked(post.content) }} 
          />
        </div>

        {/* Social sharing fijo en el artículo */}
        <div className={styles.shareSection}>
          <h3>Comparte este artículo</h3>
          <div className={styles.shareButtons}>
            <button 
              onClick={shareOnTwitter} 
              className={styles.shareButton}
              aria-label="Compartir en Twitter"
            >
              🐦 Twitter
            </button>
            <button 
              onClick={shareOnLinkedIn} 
              className={styles.shareButton}
              aria-label="Compartir en LinkedIn"
            >
              💼 LinkedIn
            </button>
            <button 
              onClick={shareOnWhatsApp} 
              className={styles.shareButton}
              aria-label="Compartir en WhatsApp"
            >
              💬 WhatsApp
            </button>
          </div>
        </div>

        {/* Navegación entre posts */}
        <nav className={styles.postNavigation}>
          <Link href="/blog" className={styles.backToBlog}>
            ← Volver al blog
          </Link>
        </nav>
      </article>

      {/* Posts relacionados */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedPosts}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>📚 Artículos relacionados</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className={styles.relatedCard}
                >
                  {relatedPost.image && (
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={300}
                        height={180}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className={styles.relatedContent}>
                    <span className={styles.relatedCategory}>
                      {relatedPost.category}
                    </span>
                    <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
                    <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                    <span className={styles.readMoreRelated}>Leer más →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  const allPosts = getAllPosts();

  // Buscar artículos relacionados
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Si faltan relacionados, completar con otros
  if (relatedPosts.length < 3) {
    const otherPosts = allPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.some(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  // Añadir tiempo de lectura
  const postWithReadingTime = {
    ...post,
    readingTime: Math.ceil(post.content.split(' ').length / 200)
  };

  return { 
    props: { 
      post: postWithReadingTime, 
      relatedPosts 
    } 
  };
};
