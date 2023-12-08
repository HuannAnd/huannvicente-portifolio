import ClientDesignConcept from "./DesignConcept.client"

interface Props { }

export default async function ServerDesignConcept({ }: Props) {
  return (
    <>
      <ClientDesignConcept />
    </>
  )
}