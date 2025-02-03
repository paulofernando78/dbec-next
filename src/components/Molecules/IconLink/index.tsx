import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconLinkProps } from './type'

export const IconLink = ({ iconLinks }:IconLinkProps) => {
  return (
    <>
      {iconLinks.map((iconLink, Index) => (
        <div key={Index} className='flex-8px-center'>
          <Image src={iconLink.imgSrc} alt={iconLink.imgAlt} className='icon-general'/>
          <Link href={iconLink.link} className="p-font">{iconLink.linkLabel}</Link>
        </div>
      ))}
    </>
  )
}
