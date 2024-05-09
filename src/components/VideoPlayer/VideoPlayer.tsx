

export const VideoPlayer = ({ videoSrc }) => {
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
