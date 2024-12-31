import React from 'react'

import { ContentProps } from './type'

export const Content = ({ contents }:ContentProps) => {
  return (
    <div>
      <h3 className='margin-bottom'><b>Contents</b></h3>
      {contents.map((content, contentIndex) => (
        <a
        href={content.link}
        className='display-block'
        key={contentIndex} 
        >
        {content.content}
        </a>
      ))}
    </div>
  )
}