import { useState } from "react"

export default function Lights() {
  const [data] = useState({
    color: "white",
    intensity: 1,
    distance: 20,
    angle: 120,
    penumbra: 1,
    decay: 1.5,
  })

  return <spotLight position={[0, 10, 0]} args={[data.color, data.intensity, data.distance, data.angle, data.penumbra, data.decay]} />
}