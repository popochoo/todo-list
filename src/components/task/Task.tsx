import { useState } from "react";
import type { InputTaskProps } from "../../types/input.interface";
import styles from "./task.module.scss";

export function Task({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}: InputTaskProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(e) => {
            setChecked(e.target.checked);

            if (e.target.checked) {
              onDone(id);
            }
          }}
        />
        <h3 className={styles.inputTaskTitle}>{title}</h3>
      </label>
      <button
        aria-label="Edit"
        className={styles.inputTaskEdit}
        onClick={() => {}}
      />
      <button
        aria-label="Remove"
        className={styles.inputTaskRemove}
        onClick={() => {
          if (confirm("Вы уверены?")) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
}
