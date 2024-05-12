import { ReactNode } from 'react'
import style from "./Card.module.css"

interface CardProps {
    children: ReactNode;
}

export const Card = ({children}:CardProps) => {
  return (
    <div className={style["card"]}> 
    <p>{children}</p>
    </div>
  )
}
