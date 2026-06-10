import { useState } from "react";
import type { InputProps } from "../../types/input.interface";
import styles from "./input.module.scss";

export function Input({ addTask }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Названание задачи"
      />
      <button
        onClick={() => addTask(inputValue)}
        aria-label="add"
        className={styles.inputButton}
      ></button>
    </div>
  );
}
