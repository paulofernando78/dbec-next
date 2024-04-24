import { ReactNode } from 'react'

interface ICard {
    children: ReactNode;
}

export const Card = ({children}:ICard) => {
  return (
    <p>{children}</p>
  )
}
