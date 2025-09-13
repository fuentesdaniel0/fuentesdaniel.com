import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Experience</h2>
      </div>
      <div className={styles.itemList}>
        <details className={styles.item}>
          <summary className={styles.summary}>
            <p className={styles.title}>Customer Engineer  - Google Cloud </p>
            <img src="/images/icon-41.svg" className="accordion-arrow" alt="Toggle details" />
          </summary>
          <div className={styles.content}>
            <p>Details about the Customer Engineer role at Google Cloud.</p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.summary}>
            <p className={styles.title}>Solutions Engineer - Google Cloud </p>
            <img src="/images/icon-46.svg" className="accordion-arrow" alt="Toggle details" />
          </summary>
          <div className={styles.content}>
            <p>Details about the Solutions Engineer role at Google Cloud.</p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.summary}>
            <p className={styles.title}>Software Engineer - PROS</p>
            <img src="/images/icon-51.svg" className="accordion-arrow" alt="Toggle details" />
          </summary>
          <div className={styles.content}>
            <p>Details about the Software Engineer role at PROS.</p>
          </div>
        </details>
      </div>
    </section>
  );
}