import { GetStaticProps } from 'next';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, Post } from '@/lib/posts'; // ✅ IMPORTAR Post
import styles from '@/styles/BlogCards.module.css';
import HeaderBlog from '@/components/HeaderBlog';
import Footer from '@/components/Footer';
import Head from 'next/head';

// ✅ INTERFAZ ELIMINADA - usar la de lib/posts

const categories = [
  'Todos',
  'Ejercicios',
  'Salud', 
  'Nutricion',
  'Consejos',
  'Rehabilitación'
];

export default function Blog({ posts }: { posts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Posts filtrados
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm]);

  // Post destacado (el más reciente)
  const featuredPost = posts[0];
  const regularPosts = filteredPosts.slice(selectedCategory === 'Todos' ? 1 : 0);

  return (
    <>
      <Head>
        <title>Blog ANTEA - Ejercicio Funcional y Salud para Mayores | Madrid</title>
        <meta 
          name="description" 
          content="Blog especializado en ejercicio funcional para personas mayores. Consejos de salud, testimonios reales y guías profesionales en Madrid." 
        />
        <meta name="keywords" content="blog salud mayores, ejercicio funcional, fisioterapia Madrid, rehabilitación personas mayores" />
        <link rel="canonical" href="https://anteasalud.com/blog" />
      </Head>
      
      <HeaderBlog />
      
      <div className={styles.blogContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              📚 Blog de <span className={styles.brand}>ANTEA</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Consejos profesionales, ejercicios y testimonios reales sobre salud y bienestar para personas mayores
            </p>
          </div>
        </section>

        {/* Buscador y Filtros */}
        <section className={styles.filters}>
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="🔍 Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category ? styles.active : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <div className={styles.contentWrapper}>
          {/* Post Destacado */}
          {selectedCategory === 'Todos' && featuredPost && (
            <section className={styles.featured}>
              <h2 className={styles.sectionTitle}>✨ Artículo Destacado</h2>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredCard}>
                {featuredPost.image && (
                  <div className={styles.featuredImage}>
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <div className={styles.featuredOverlay}>
                      <span className={styles.featuredBadge}>Destacado</span>
                    </div>
                  </div>
                )}
                <div className={styles.featuredContent}>
                  <div className={styles.featuredMeta}>
                    <span className={styles.category}>{featuredPost.category || 'General'}</span>
                    <span className={styles.date}>{featuredPost.date}</span>
                    {featuredPost.readingTime && (
                      <span className={styles.readingTime}>⏱️ {featuredPost.readingTime} min</span>
                    )}
                  </div>
                  <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
                  <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <span className={styles.readMore}>Leer artículo completo →</span>
                </div>
              </Link>
            </section>
          )}

          {/* Lista de Posts */}
          <section className={styles.postsSection}>
            <h2 className={styles.sectionTitle}>
              📖 {selectedCategory === 'Todos' ? 'Todos los Artículos' : selectedCategory}
              <span className={styles.postsCount}>({filteredPosts.length})</span>
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className={styles.noResults}>
                <p>😔 No se encontraron artículos que coincidan con tu búsqueda.</p>
                <button onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}>
                  Ver todos los artículos
                </button>
              </div>
            ) : (
              <div className={styles.postsGrid}>
                {regularPosts.map((post, index) => (
                  <article key={post.slug} className={styles.postCard} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                    <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                      {post.image && (
                        <div className={styles.cardImage}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <div className={styles.cardContent}>
                        <div className={styles.cardMeta}>
                          <span className={styles.category}>{post.category || 'General'}</span>
                          <span className={styles.date}>{post.date}</span>
                          {post.readingTime && (
                            <span className={styles.readingTime}>⏱️ {post.readingTime}min</span>
                          )}
                        </div>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                        {post.author && (
                          <div className={styles.author}>
                            <span>Por {post.author}</span>
                          </div>
                        )}
                        <span className={styles.readMore}>Leer más →</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  
  // Añadir tiempo de lectura estimado (category y author ya vienen de getAllPosts)
  const posts = allPosts
    .map(post => ({
      ...post,
      readingTime: Math.ceil(post.content.split(' ').length / 200), // ~200 palabras por minuto
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { 
    props: { posts },
    revalidate: 3600 // Revalidar cada hora
  };
};
