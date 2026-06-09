import styles from "./mainContainer.module.scss";

export function MainContainer() {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Список задач</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
}
