import { useStore } from "../../store/useStore";
import { Input } from "../input/Input";
import { Task } from "../task/Task";
import styles from "./mainContainer.module.scss";

export function MainContainer() {
  const { tasks, createTask, updateTask, removeTask } = useStore();

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Список задач</h1>
      <section className={styles.articleSection}>
        <Input addTask={createTask} />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && <p className={styles.articleText}>Нет задач</p>}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
            key={task.id}
          />
        ))}
      </section>
    </article>
  );
}
