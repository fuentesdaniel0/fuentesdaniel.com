import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Daniel Fuentes</h1>
        <p className={styles.subtitle}>Full-stack Developer | Cloud Engineer</p>
      </div>
    </section>
  );
}