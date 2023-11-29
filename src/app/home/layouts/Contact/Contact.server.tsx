import ClientContact from "./Contact.client"

interface Props { }


export default async function ServerContact({ }: Props) {
  const socialsMedias = [
    { name: "LinkedIn", imageURL: "/linkedin-poster.png" },
    { name: "Dribbble", imageURL: "/dribbble-brand.png" },
  ]


  return (
    <>
      <ClientContact socialMedias={socialsMedias} />
    </>
  )
}