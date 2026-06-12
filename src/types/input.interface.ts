export interface InputProps {
    addTask: (title: string) => void;
}

export interface InputTaskProps {
    id: string
    title: string
    onDone: (title: string) => void
    onEdited: (id: string, value: string) => void
    onRemoved: (id: string) => void
}