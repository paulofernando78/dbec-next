import { StaticImageData } from "next/image"

interface IconLink {
  imgSrc: StaticImageData
  imgAlt: string
  link: string
  linkLabel: string
}

export interface IconLinkProps {
  iconLinks: IconLink[]
}