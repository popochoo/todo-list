import { useState } from "react";
import type { InputProps } from "../../types/input.interface";
import styles from "./input.module.scss";

export function Input({ addTask }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    addTask(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        placeholder="Названание задачи"
      />
      <button
        onClick={handleAddTask}
        aria-label="add"
        className={styles.inputButton}
      ></button>
    </div>
  );
}
