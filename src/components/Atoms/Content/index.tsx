  import React from 'react'
import styles from './styles.module.css'

import { ContentProps } from './type'
import { Collapsible } from '../Collapsibles'

export const Content = ({ contents }:ContentProps) => {
  return (
      <Collapsible label='Contents'>
      <div className={styles["content-container"]}>
        {contents.map((content, contentIndex) => (
          <a
          href={content.link}
          className={`display-block p-font ${styles["margin-left"]}`}
          key={contentIndex} 
          >
          {content.content}
          </a>
        ))}
      </div>
      </Collapsible>
  )
}