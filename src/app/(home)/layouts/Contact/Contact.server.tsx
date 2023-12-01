// import ClientContact from "./Contact.client.old"
import ClientContact from "./Contact.client"
import ClientSocialMedia from "./SocialMediaCard"

import StaticImageWithFallback from "@/app/(repository)/repository/[id]/StaticImageWithFallback"

interface Props { }


export default async function ServerContact({ }: Props) {
  const socialsMedias = [
    { name: "LinkedIn", artAuthor: "HuannAnd", imageURL: "/linkedin-poster.png" },
    { name: "Dribbble", artAuthor: "heyjeuss", imageURL: "/dribbble-brand.png" },
  ]


  return (
    <>
      <ClientContact>
        {socialsMedias.map((x, index) => <ClientSocialMedia index={index} name={x.name} artAuthor={x.artAuthor} imageContent={<StaticImageWithFallback className="absolute h-full object-cover ease-smooth duration-300 even:mr-4 group-hover/snapshot:scale-[1.05]" src={x.imageURL} alt="image" />} />)}
      </ClientContact>
    </>
  )
}