'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";



interface HamburguerProps {

}

export default function Hamburguer({ }: HamburguerProps) {
  // const { scrollYProgress } = useScroll();
  // const { scroll } = useLocomotiveScroll();
  // console.log("scroll: ", scroll)

  // console.log(console.log(scrollYProgress.get()));

  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["hsl(30deg 45% 100%)", "hsl(210deg 45% 50%)"]
  // )

  // console.log(console.log(background.get()));


  return (
    <motion.div
      data-scroll
      className="w-[9vw] z-50 fixed grid place-content-center text-black text-center top-[3vw] right-[9vw] aspect-square"
    // style={{ background }}
    // initial={{ backC: "#fff" }}
    >
      -
    </motion.div>
  )
}