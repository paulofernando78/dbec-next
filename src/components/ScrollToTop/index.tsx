import Image from 'next/image'

import styles from "./styles.module.css"

// Image
import scrollToTopIcon from "@/img/icon/scroll-to-top.png"

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
}

export const ScrollToTop = () => {
  return (
    <div>
    <Image src={scrollToTopIcon} alt='Back-to-top icon' className={styles["scroll-to-top"]} onClick={scrollToTop}/>
    </div>
  )
}
