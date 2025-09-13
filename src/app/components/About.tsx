import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.text}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>About me</h2>
        </div>
        <p className={styles.paragraph}>Hi, I'm Daniel Fuentes. I'm a software engineer in Austin who builds cloud-native applications.

          By day, I'm a Customer Engineer at Google, where I help startups design scalable systems on GCP. My background is in full-stack engineering, using technologies like React, Node.js, and Vertex AI to solve complex problems.

          While I enjoy high-level architecture, my real passion is hands-on development. I spend my free time building applications, which lets me stay sharp and continuously tackle new challenges with code.</p>
      </div>
    </section>
  );
}