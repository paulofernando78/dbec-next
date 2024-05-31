import { ReactNode } from 'react'
import style from "./Card.module.css"

interface CardProps {
    children: ReactNode;
    bgColor?: string
    textColor?: string
}

export const Card = ({children, bgColor, textColor}: CardProps) => {
  return (
    <div className={style["card"]} style={{ backgroundColor: bgColor, color: textColor }}>
    <span className='p-font'>{children}</span>
    </div>
  )
}
