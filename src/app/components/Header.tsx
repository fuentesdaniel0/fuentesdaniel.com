import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <a href="#" className={styles.logoLink}>
          <Image src="/images/icon-5.svg" className={styles.logoIcon} alt="Logo" width={40} height={40} />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="mailto:admin@fuentesdaniel.com" className={styles.navLink}>Contact me</a>
        <a href="https://github.com/fuentesdaniel0" className={styles.navLink} target="_blank" rel="noopener noreferrer">Github</a>
      </nav>
      <div className={styles.actions}>
        <a href="https://storage.googleapis.com/your-bucket-name/Daniel-Fuentes-Resume.pdf" download="Daniel-Fuentes-Resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </header>
  );
}