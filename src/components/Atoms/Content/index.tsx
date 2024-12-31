import React from 'react'

import { ContentProps } from './type'

export const Content = ({ contents }:ContentProps) => {
  return (
    <div>
      {contents.map((content, contentIndex) => (
        <p key={contentIndex}>{content.content}</p>
      ))}
    </div>
  )
}