import Image from "next/image";

import { AudioPlayer } from "../../Atoms/AudioPlayer";
import { DictionaryCard } from "../../DictionaryCard/DictionaryCard";

// CSS
import styles from "./styles.module.css";

// Images (you can continue to use dynamic imports if needed)
const gifPaths = [
  "/assets/img/gif/good.gif",
  "/assets/img/gif/happy.gif",
  "/assets/img/gif/sad.gif",
  "/assets/img/gif/angry.gif",
  "/assets/img/gif/annoyed.gif",
  "/assets/img/gif/calm.gif",
  "/assets/img/gif/crazy.gif",
  "/assets/img/gif/tired.gif",
  "/assets/img/gif/anxious.gif",
  "/assets/img/gif/bored.gif",
  "/assets/img/gif/silly.gif",
  "/assets/img/gif/scared.gif",
  "/assets/img/gif/thoughtful.gif",
  "/assets/img/gif/frustrated.gif",
  "/assets/img/gif/disappointed.gif",
  "/assets/img/gif/embarrassed.gif",
  "/assets/img/gif/sleepy.gif",
  "/assets/img/gif/strong.gif",
  "/assets/img/gif/peaceful.gif",
  "/assets/img/gif/thankful.gif",
  "/assets/img/gif/sick.gif",
  "/assets/img/gif/i-dont-know.gif",
];

const emojis = [
  { altWord: "ok", word: "good", audioSrc: "/dictionary/g/good.mp3" },
  { altWord: "happy", word: "happy", audioSrc: "/dictionary/h/happy.mp3" },
  { altWord: "sad", word: "sad", audioSrc: "/dictionary/s/sad.mp3" },
  { altWord: "angry", word: "angry", audioSrc: "/dictionary/a/angry.mp3" },
  { altWord: "annoyed", word: "annoyed", audioSrc: "/dictionary/a/annoyed.mp3" },
  { altWord: "calm", word: "calm", audioSrc: "/dictionary/c/calm.mp3" },
  { altWord: "crazy", word: "crazy", audioSrc: "/dictionary/c/crazy.mp3" },
  { altWord: "tired", word: "tired", audioSrc: "/dictionary/t/tired.mp3" },
  { altWord: "anxious", word: "anxious", audioSrc: "/dictionary/a/anxious.mp3" },
  { altWord: "bored", word: "bored", audioSrc: "/dictionary/b/bored.mp3" },
  { altWord: "silly", word: "silly", audioSrc: "/dictionary/s/silly.mp3" },
  { altWord: "scared", word: "scared", audioSrc: "/dictionary/s/scared.mp3" },
  { altWord: "thoughtful", word: "thoughtful", audioSrc: "/dictionary/t/thoughtful.mp3" },
  { altWord: "frustrated", word: "frustrated", audioSrc: "/dictionary/f/frustrated.mp3" },
  { altWord: "disappointed", word: "disappointed", audioSrc: "/dictionary/d/disappointed.mp3" },
  { altWord: "embarrassed", word: "embarrassed", audioSrc: "/dictionary/e/embarrassed.mp3" },
  { altWord: "sleepy", word: "sleepy", audioSrc: "/dictionary/s/sleepy.mp3" },
  { altWord: "strong", word: "strong", audioSrc: "/dictionary/s/strong.mp3" },
  { altWord: "peaceful", word: "peaceful", audioSrc: "/dictionary/p/peaceful.mp3" },
  { altWord: "thankful", word: "thankful", audioSrc: "/dictionary/t/thankful.mp3" },
  { altWord: "sick", word: "sick", audioSrc: "/dictionary/s/sick.mp3" },
  { altWord: "I don't know", word: "idontknow", audioSrc: "/dictionary/i/I-dont-know.mp3" },
];

export default function HowYouFeeling() {
  return (
    <>
      <div className="line-break">
        <AudioPlayer audioSrc="/how-you-feeling.mp3" />
        <div className={styles["feeling"]}>
          <p>A: Hey, how are you feeling today?</p>
          <p>B: I'm feeling pretty good. Thanks for asking.</p>
        </div>
        <div className={styles["emoji-container"]}>
          {emojis.map((emoji, index) => (
            <div key={emoji.altWord} className={styles["emoji-inner-container"]}>
              <Image
              src={gifPaths[index]} // Use dynamic path here
              alt={emoji.altWord}
              className={styles["emoji-size"]} // Use 'styles' instead of 'style'
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
              />
              <p>
              <DictionaryCard {...{ audioSrc: emoji.audioSrc, word: emoji.word }} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
