import { useCallback, useRef, useState } from "react";

/**
 * Keeps a list of toasts. Every call to `addToast` creates a new one,
 * so repeated actions stack instead of replacing each other.
 *
 * @returns {{
 *   toasts: { id: number, message: string, variant: string }[],
 *   addToast: (message: string, variant?: "success" | "warning" | "danger") => void,
 *   removeToast: (id: number) => void,
 * }}
 */
export const useToasts = () => {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);

  const addToast = useCallback((message, variant = "success") => {
    nextId.current += 1;
    const id = nextId.current;
    // New toasts go to the end of the list, so they appear below the others.
    setToasts((previous) => [...previous, { id, message, variant }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((previous) => previous.filter((toast) => toast.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};
