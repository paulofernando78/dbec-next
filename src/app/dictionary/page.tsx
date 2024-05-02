import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import style from "./dictionary.module.css"

export default function Dictionary() {
  return (
    <div>
      <Whiteboard
      title="Dictionary"
      descriptions={["verb", "phrasal verb", "noun", "adjective", "idiom"]}
      />
      <input type='text' placeholder='Enter a word'className={style['dictionary-input']}/>
      <button>aaa</button>
    </div>
  )
}
