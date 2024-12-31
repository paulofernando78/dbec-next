import React from 'react'

import { ContentProps } from './type'
import { Collapsible } from '../Collapsibles'

export const Content = ({ contents }:ContentProps) => {
  return (
    <div>
      <Collapsible label='Contents'>
      <React.Fragment>
        {contents.map((content, contentIndex) => (
          <a
          href={content.link}
          className='display-block p-font'
          key={contentIndex} 
          >
          {content.content}
          </a>
        ))}
      </React.Fragment>
      </Collapsible>
    </div>
  )
}