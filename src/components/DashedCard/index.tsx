import { ReactNode } from 'react'
import styles from "./style.module.css"

interface CardProps {
    children: ReactNode;
    bgColor?: string
    textColor?: string
}

export const DashedCard = ({children, bgColor, textColor}: CardProps) => {
  return (
    <div className={styles["dashed-card"]} style={{ backgroundColor: bgColor, color: textColor }}>
    <span className='p-font'>{children}</span>
    </div>
  )
}
