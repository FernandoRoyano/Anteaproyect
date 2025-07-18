import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import styles from '@/styles/BlogCards.module.css';
import HeaderBlog from '@/components/HeaderBlog';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Blog({ posts }: { posts: any[] }) {
  return (
    <>
      <HeaderBlog />
      <main className={styles.main}>
        <h1 className={styles.heading}>Blog ANTEA</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              {post.image && (
                <div className={styles.imgWrap}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={700}
                    height={350}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className={styles.date}>{post.date}</div>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};
