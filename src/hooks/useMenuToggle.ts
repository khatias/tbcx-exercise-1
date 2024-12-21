import { useState } from "react";

export function useMenuToggle(initialState = false) {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return [isMenuOpen, toggleMenu];
}
