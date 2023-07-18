import { useFollowerContext } from "@/hooks/useFollowerContext";
import { motion } from "framer-motion";

type MidiaProps = {
  title: string,
  image: string

}

export default function Midia({ title, image }: MidiaProps) {
  const { updateEvent } = useFollowerContext()

  return (
    <motion.div
      className="col-span-3 saturate-0 cursor-pointer py-10"
      onMouseEnter={() => updateEvent({ type: "hovered" })}
      onMouseDown={() => updateEvent({ type: "pressed" })}
      onMouseUp={() => updateEvent({ type: "hovered" })}
      onMouseLeave={() => updateEvent({ type: "normal" })}
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