import { motion } from "framer-motion";

import useFollowerSetState from "@/hooks/useFollowerSetState";

type MidiaProps = {
  title: string,
  image: string

}

export default function Midia({ title, image }: MidiaProps) {
  const setCursorState = useFollowerSetState()

  const handles = {
    onMouseEnter: () => setCursorState("hovered"),
    onMouseDown: () => setCursorState("pressed"),
    onMouseUp: () => setCursorState("hovered"),
    onMouseLeave: () => setCursorState("normal")
  }

  return (
    <motion.div
      className="col-span-3 saturate-0 cursor-pointer py-10"
      {...handles}
    >
      <motion.img
        className="w-[100px] object-cover aspect-square mx-auto "
        whileHover={{ scale: 1.5, marginBottom: "10px" }}
        src="/midia/linkedin/image.png"
      />
      <h5 className="text-center mb-4 fonto-regular">{title}</h5>
    </motion.div>
  )
}