import { ReactNode } from 'react'
import card from "./Card.module.css"

interface ICard {
    children: ReactNode;
}

export const Card = ({children}:ICard) => {
  return (
    <div className={card["card"]}> 
    <p>{children}</p>
    </div>
  )
}
