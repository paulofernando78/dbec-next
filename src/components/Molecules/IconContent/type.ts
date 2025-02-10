import { StaticImageData } from "next/image"

interface IconContent {
  imgSrc: StaticImageData
  imgAlt: string
  content?: string
  link?: string
  linkLabel?: string
}

export interface IconContentProps {
  iconContents: IconContent[]
}