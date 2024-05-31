import styles from "./styles.module.css"

interface VideoPlayerProps {
  videoSrc: string
}

export const VideoPlayer = ({ videoSrc }: VideoPlayerProps) => {
  return (
    <>
    <iframe
    src={videoSrc}
    allowFullScreen
    className={styles["video-customization"]}
    />    
    </>
  )
}
