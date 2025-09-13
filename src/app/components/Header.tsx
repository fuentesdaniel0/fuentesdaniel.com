import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <a href="#" className={styles.logoLink}>
          <img src="/images/icon-5.svg" className={styles.logoIcon} alt="Logo" />
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