import { create } from "zustand";
import type { Task, TodoStore } from "../types/task.interface";
import { generateId } from "../utils";
import { localStorageUpdate } from "./middleware";

const STORAGE_KEY = "todo-tasks-storage";

const getInitialState = (): { tasks: Task[] } => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)

        return saved ? JSON.parse(saved) : { tasks: [] }
    } catch {
        return { tasks: [] }
    }
}

export const useStore = create<TodoStore>(localStorageUpdate<TodoStore>(STORAGE_KEY)((set, get) => ({
    tasks: getInitialState().tasks || [],
    createTask: (title: string) => {
        const { tasks } = get()

        const newTask = {
            id: generateId(),
            title,
            createdAt: new Date().toISOString(),
        }

        set({
            tasks: [newTask].concat(tasks)
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get()

        set({
            tasks: tasks.map(task => task.id === id ? { ...task, title } : task)
        })
    },
    removeTask: (id: string) => {
        const { tasks } = get()

        set({
            tasks: tasks.filter(task => task.id !== id)
        })
    }
})))