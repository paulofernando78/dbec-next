import { AudioPlayer } from '@/components/Audioplayer'
import { UnderConstruction } from '@/components/UnderConstruction'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson2Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Classwork", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
        <AudioPlayer audioSrc="\assets\audio\courses\beginner\courses-beginner-Unit 01 Pg 003 Ex 05 Listening.mp3"/>
        <div>
          <p>1. Is her name with "k" or with "c"? Her name starts with...</p>
          <p>2. Is his name with "ck" or "k"</p>
          <p>3. with "ph" or "f"?</p>
          <p>4. Za _ _ ary. with "ch" or "ck"</p>
        </div>
        <AudioPlayer audioSrc="\assets\audio\courses\beginner\courses-beginner-Unit 01 Pg 004 Ex 06 Word Power Pt B.mp3" />
        <div>
          <p className='bold'>Mr.? Mrs.? Ms.? or Miss?</p>
          <p>1. _____ Santos</p>
          <p>2. _____ Wilson</p>
          <p>3. _____ Park</p>
          <p>4. _____ Rossi</p>
        </div>
      </div>
    </>
  )
}
