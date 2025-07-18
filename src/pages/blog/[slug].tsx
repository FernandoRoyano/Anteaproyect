import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/BlogPost.module.css'; // CREA ESTE CSS SI AÚN NO LO TIENES

export default function BlogPost({ post }: { post: any }) {
  if (!post) return <div>No encontrado</div>;
  return (
    <main className={styles.main}>
      {/* Imagen destacada */}
      {post.image && (
        <div className={styles.imgWrap}>
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={400}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: 16 }}
          />
        </div>
      )}
      {/* Título y fecha */}
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.date}>{post.date}</div>
      {/* Contenido */}
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
      {/* Botón Volver */}
      <div className={styles.backBox}>
        <Link href="/blog" className={styles.backBtn}>
          ← Volver al blog
        </Link>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  return { props: { post } };
};
