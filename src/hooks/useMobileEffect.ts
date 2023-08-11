import { useEffect } from "react";

export default function useMobileEffect(action: () => void) {
  useEffect(() => {
    const isMobile = window.innerWidth <= 647; // Defina o limite para considerar como "mobile"

    if (isMobile) {
      action(); // Executar ação apenas em dispositivos móveis
    }
  }, [action]);
}