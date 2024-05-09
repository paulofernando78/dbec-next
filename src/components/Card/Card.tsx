import { ReactNode } from 'react'
import style from "./Card.module.css"

interface ICard {
    children: ReactNode;
}

export const Card = ({children}:ICard) => {
  return (
    <div className={style["card"]}> 
    <p>{children}</p>
    </div>
  )
}
