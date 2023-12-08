// import ClientContact from "./Contact.client.old"
import ClientContact from "./Contact.client"
import ClientSocialMedia from "./SocialMediaCard"

import StaticImageWithFallback from "@/app/(repository)/repository/[id]/StaticImageWithFallback"

interface Props { }


export default async function ServerContact({ }: Props) {
  const socialsMedias = [
    {
      name: "LinkedIn",
      artAuthor: "HuannAnd",
      href: "https://www.linkedin.com/in/huann-vicente-5092a9261/",
      imageURL: "/linkedin-poster.png"
    },
    {
      name: "Dribbble",
      artAuthor: "heyjeuss",
      href: "",
      imageURL: "/dribbble-brand.png"
    },
  ]


  return (
    <>
      <ClientContact>
        {socialsMedias.map((x, index) => <ClientSocialMedia index={index} href={x.href} name={x.name} artAuthor={x.artAuthor} imageContent={<StaticImageWithFallback className="absolute h-full object-cover ease-smooth duration-300 even:mr-4 group-hover/snapshot:scale-[1.05]" src={x.imageURL} alt="image" />} />)}
      </ClientContact>
    </>
  )
}