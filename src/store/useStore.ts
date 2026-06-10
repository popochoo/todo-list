import { create } from "zustand";
import type { TodoStore } from "../types/task.interface";
import { generateId } from "../utils";

export const useStore = create<TodoStore>((set, get) => ({
    tasks: [],
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
}))