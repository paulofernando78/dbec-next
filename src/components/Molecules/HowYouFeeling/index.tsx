import SwiperFraction from "@/components/Organisms/Swiper/Fraction";
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
  { altLabel: "ok", label: "good", audioSrc: "/dictionary/g/good.mp3" },
  { altLabel: "happy", label: "happy", audioSrc: "/dictionary/h/happy.mp3" },
  { altLabel: "sad", label: "sad", audioSrc: "/dictionary/s/sad.mp3" },
  { altLabel: "angry", label: "angry", audioSrc: "/dictionary/a/angry.mp3" },
  { altLabel: "annoyed", label: "annoyed", audioSrc: "/dictionary/a/annoyed.mp3" },
  { altLabel: "calm", label: "calm", audioSrc: "/dictionary/c/calm.mp3" },
  { altLabel: "crazy", label: "crazy", audioSrc: "/dictionary/c/crazy.mp3" },
  { altLabel: "tired", label: "tired", audioSrc: "/dictionary/t/tired.mp3" },
  { altLabel: "anxious", label: "anxious", audioSrc: "/dictionary/a/anxious.mp3" },
  { altLabel: "bored", label: "bored", audioSrc: "/dictionary/b/bored.mp3" },
  { altLabel: "silly", label: "silly", audioSrc: "/dictionary/s/silly.mp3" },
  { altLabel: "scared", label: "scared", audioSrc: "/dictionary/s/scared.mp3" },
  { altLabel: "thoughtful", label: "thoughtful", audioSrc: "/dictionary/t/thoughtful.mp3" },
  { altLabel: "frustrated", label: "frustrated", audioSrc: "/dictionary/f/frustrated.mp3" },
  { altLabel: "disappointed", label: "disappointed", audioSrc: "/dictionary/d/disappointed.mp3" },
  { altLabel: "embarrassed", label: "embarrassed", audioSrc: "/dictionary/e/embarrassed.mp3" },
  { altLabel: "sleepy", label: "sleepy", audioSrc: "/dictionary/s/sleepy.mp3" },
  { altLabel: "strong", label: "strong", audioSrc: "/dictionary/s/strong.mp3" },
  { altLabel: "peaceful", label: "peaceful", audioSrc: "/dictionary/p/peaceful.mp3" },
  { altLabel: "thankful", label: "thankful", audioSrc: "/dictionary/t/thankful.mp3" },
  { altLabel: "sick", label: "sick", audioSrc: "/dictionary/s/sick.mp3" },
  { altLabel: "I don't know", label: "idontknow", audioSrc: "/dictionary/i/I-dont-know.mp3" },
];

export default function HowYouFeeling() {
  return (
    <>
      <div className="line-break">
        <AudioPlayer audioSrc="/assets/audio/how-you-feeling.mp3" />
        <div className={styles["feeling"]}>
          <h3>A: Hey, how are you feeling today?</h3>
          <h3>B: I'm feeling pretty good. Thanks for asking.</h3>
        </div>
        <div className={styles["emoji-container"]}>
          {emojis.map((emoji, index) => (
            <div key={emoji.altLabel} className={styles["emoji-inner-container"]}>
              <img
                src={gifPaths[index]} // Use dynamic path here
                alt={emoji.altLabel}
                className={styles["emoji-size"]} // Use 'styles' instead of 'style'
              />
              <p>
                <DictionaryCard {...{ audioSrc: emoji.audioSrc, label: emoji.label }} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
