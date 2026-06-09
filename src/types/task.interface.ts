export interface Task {
    id: string
    title: string
    createdAt: string
}

export interface TodoStore {
    tasks: Task[]
    createTask: (title: string) => void
    updateTask: (id: string, title: string) => void
    removeTask: (id: string) => void
}