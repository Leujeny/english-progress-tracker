import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item) as T);
        }
      } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
      } finally {
        setIsClientLoaded(true);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined" && isClientLoaded) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [key, storedValue, isClientLoaded]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    setStoredValue(prevValue => {
      const newValue = value instanceof Function ? value(prevValue) : value;
      return newValue;
    });
  }, []);

  return [storedValue, setValue, isClientLoaded] as const;
}