import { useRef, useEffect } from "react";

export function useClickOutside(
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
) {
  const ref = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      setIsOpen(!isOpen);
      return;
    }
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return { ref, buttonRef };
}

export default useClickOutside;
