import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { Card } from '@/components/Card/Card'
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer"
import { DictionaryCard } from '@/components/DictionaryCard/DictionaryCard'

export default function Mock() {
  return (
    <div>
      <Whiteboard title='Mocks' />
      <div className='line-break'>
        <Card><b>Audio Player</b></Card>
        <AudioPlayer audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" />
      <Card><b>Radio</b></Card>
      <Card><b>Checkbox</b></Card>
      <Card><b>Dropdown</b></Card>
      <Card><b>Fill in The Blanks</b></Card>
      <Card><b>Dictionary Card</b></Card>
      <p>I&apos;m feeling <DictionaryCard
      audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"
      label="good" /> today.</p> 
      </div>
    </div>
  )
}
