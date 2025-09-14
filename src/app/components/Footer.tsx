import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/daniel-a-fuentes/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <Image src="/images/icon-74.svg" className={styles.socialIcon} alt="LinkedIn" width={32} height={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}