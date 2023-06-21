import { useEffect, useState } from "react";


export default function useIsVisible<T extends Element>(ref: React.MutableRefObject<T>) {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setisVisible(true);
          return
        }
        setisVisible(false);
      })
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  },
    []
  )

  return isVisible;
}