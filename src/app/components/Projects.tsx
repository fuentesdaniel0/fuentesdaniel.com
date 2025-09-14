import styles from './Projects.module.css';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Projects </h2>
      </div>
      <div className={styles.list}>
        <article className={styles.card}>
          <div className={styles.iconWrapper}>
            <Image src="/images/icon-58.svg" className={styles.icon} alt="" width={64} height={64} />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>Simple LLM service </h3>
            <p className={styles.description}>A smart chatbot designed to help internal sales teams. This tool uses a special method called a Retrieval-Augmented Generation (RAG) pipeline, which connects a powerful language model (Gemini 1.0) to technical documents. This allows the chatbot to give much more accurate and helpful answers to questions.</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.iconWrapper}>
            <Image src="/images/icon-65.svg" className={styles.icon} alt="" width={64} height={64} />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>Spotify analytics and collaboration features</h3>
            <p className={styles.description}>A fun, full-stack web application that lets you and your friends find the music you have in common. By connecting your Spotify accounts, the app can find the songs that overlap in your playlists. It&apos;s built with a modern tech stack and uses the Spotify API to handle all the music data.</p>
          </div>
        </article>
      </div>
    </section>
  );
}