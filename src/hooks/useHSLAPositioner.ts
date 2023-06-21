import { MutableRefObject, useEffect, useRef, useState } from "react";


export default function useHSLAPositioner<T extends Element>(ref: MutableRefObject<T>) {
  const h_0 = 30;
  const h_f = 300;
  const [color, setColor] = useState<[number, number, number]>([h_0, 0, 20]);

  useEffect(() => {
    const button = ref.current;
    const { x } = button.getBoundingClientRect();
    
    function applyColor() {
      const x0 = (window.innerWidth - 1440) / 2;
      const xF = (window.innerWidth + 1440) / 2;

      const hue = ((x - x0) / (xF - x0)) * (h_f - h_0) + h_0;
      // console.log(hue);

      setColor([hue, 100, 40]);
    }

    applyColor();
  },
    []
  );

  return color;
}