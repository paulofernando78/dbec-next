
interface VideoPlayerProps {
  videoSrc: string
}

export const VideoPlayer = ({ videoSrc }: VideoPlayerProps) => {
  return (
    <>
    <iframe
    src={videoSrc}
    allowFullScreen
    className='video-player'
    />    
    </>
  )
}
