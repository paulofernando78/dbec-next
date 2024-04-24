import { ReactNode } from 'react'

interface IWhiteboard {
    title: string;
    subtitle: string;
    description: string;
}

export const Whiteboard = ({title, subtitle, description}:IWhiteboard) => {
  return (
    <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>{description}</h4>
    </div>
  )
}
