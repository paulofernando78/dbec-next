import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Button } from "@/components/Button/Button";
import style from "./dictionary.module.css";

export default function Dictionary() {
  return (
    <>
      <Whiteboard
        title="Dictionary"
        descriptions={["verb", "phrasal verb", "noun", "adjective", "idiom"]}
      />
      <div className={style["input-button"]}>
        <input
          type="text"
          placeholder="Enter a word"
          className={style["input-style"]}
        />
        <Button label="search"/>
      </div>
    </>
  );
}
