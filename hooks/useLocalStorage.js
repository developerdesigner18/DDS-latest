import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(
        JSON.parse(
            typeof window !== "undefined" && localStorage.getItem(key)
        ) ?? initialValue
    );
    const setValue = (value) => {
        typeof window !== "undefined" &&
            localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
