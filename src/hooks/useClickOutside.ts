import { useRef, useEffect, useState } from "react";

export function useClickOutside() {
  const ref = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleClickOutside(event: MouseEvent) {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      setIsOpen((pre) => !pre);
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

  return { ref, buttonRef, isOpen, setIsOpen };
}

export default useClickOutside;
