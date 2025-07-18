import Image from 'next/image';
import Link from 'next/link';
import styles from './HeaderBlog.module.css';

export default function HeaderBlog() {
  return (
    <header className={styles.headerBlog}>
      <div className={styles.logoBox}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo_antea.png"
            alt="ANTEA logo"
            width={92}
            height={92}
            priority
            className={styles.logo}
          />
        </Link>
      </div>
      <Link href="/" className={styles.homeButton}>
        Inicio
      </Link>
    </header>
  );
}
