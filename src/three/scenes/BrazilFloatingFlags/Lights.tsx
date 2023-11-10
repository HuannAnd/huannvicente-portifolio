'use client'; 

interface LightsProps {
  
}

export default function Lights({}: LightsProps) {
  return (
    <>
      <ambientLight intensity={1} color={"white"} />
    </>
  )
}