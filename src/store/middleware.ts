import type { StateCreator } from "zustand";

export const localStorageUpdate = <T>(
    key: string
) => (config: StateCreator<T, [], []>): StateCreator<T, [], []> => (set, get, api) => {
    
    const loggedSet = (...args: Parameters<typeof set>) => {
        set(...args);
 
        const nextState = get();

        try {
            localStorage.setItem(key, JSON.stringify(nextState));
        } catch (error) {
            console.error("Ошибка записи в localStorage:", error);
        }
    };

    return config(loggedSet as typeof set, get, api);
};