import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer"
import { Card } from '@/components/Card/Card'

export default function Mock() {
  return (
    <div>
      <Whiteboard title='Mocks' />
      <div className='line-break'>
        <Card><b>Audio Player</b></Card>
        <AudioPlayer audioSrc="./test.mp3" />
      </div>
    </div>
  )
}
