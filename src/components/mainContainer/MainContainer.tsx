import { useStore } from "../../store/useStore";
import { Input } from "../input/Input";
import styles from "./mainContainer.module.scss";

export function MainContainer() {
  const { tasks, createTask } = useStore();

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Список задач</h1>
      <section className={styles.articleSection}>
        <Input addTask={createTask} />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && <p className={styles.articleText}>Нет задач</p>}
      </section>
    </article>
  );
}
