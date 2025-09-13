import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/daniel-a-fuentes/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <img src="/images/icon-74.svg" className={styles.socialIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}