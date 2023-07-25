'use client';

interface LightsProps {

}

export default function Lights({ }: LightsProps) {
  return (
    <>
      <pointLight args={["#fff", 1]} />
      <ambientLight args={["#fff", .5]} />
      <directionalLight position={[0, 0, 5]} args={["white", .5]} />
      <spotLight position={[10, 10, 10]} angle={3} penumbra={1} />
    </>
  )
}