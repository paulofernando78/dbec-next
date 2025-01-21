import Image from "next/image";
import { AudioPlayer } from "../../Atoms/AudioPlayer";
import styles from "./styles.module.css";

const emojis = [
  {
    imgSrc: "/assets/img/gif/good.gif",
    imgAlt: '"thumb" up emoji.',
    words: [
      {
        word: "good",
      },
      {
        word: "well",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/happy.gif",
    imgAlt: '"happy" emoji.',
    words: [
      {
        word: "happy",
      },
      {
        word: "glad",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/sad.gif",
    imgAlt: '"sad" emoji.',
    words: [
      {
        word: "sad",
      },
      {
        word: "unhappy",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/angry.gif",
    imgAlt: '"angry" emoji.',
    keyword: "angry",
    words: [
      {
        word: "angry",
      },
      {
        word: "mad",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/annoyed.gif",
    imgAlt: '"annoyed" emoji.',
    words: [
      {
        word: "annoyed",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/calm.gif",
    imgAlt: '"calm" emoji.',
    keyword: "calm",
    words: [
      {
        word: "calm",
      },
      {
        word: "relaxed",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/crazy.gif",
    imgAlt: '"crazy" emoji.',
    words: [
      {
        word: "crazy",
      },
      {
        word: "insane",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/tired.gif",
    imgAlt: '"tired" emoji.',
    keyword: "tired",
    words: [
      {
        word: "tired",
      },
      {
        word: "exhausted",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/anxious.gif",
    imgAlt: '"anxious" emoji.',
    words: [
      {
        word: "anxious",
      },
      {
        word: "nervous",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/bored.gif",
    imgAlt: '"bored" emoji.',
    keyword: "bored",
    words: [
      {
        word: "bored",
      },
      {
        word: "...",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/silly.gif",
    imgAlt: '"silly" emoji.',
    words: [
      {
        word: "silly",
      },
      {
        word: "goofy",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/scared.gif",
    imgAlt: '"scared" emoji.',
    keyword: "scared",
    words: [
      {
        word: "scared",
      },
      {
        word: "afraid",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/thoughtful.gif",
    imgAlt: '"thoughtful" emoji.',
    words: [
      {
        word: "thoughtful",
      },
      {
        word: "reflective",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/frustrated.gif",
    imgAlt: '"frustrated" emoji.',
    keyword: "frustrate",
    words: [
      {
        word: "frustrated",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/disappointed.gif",
    imgAlt: '"disappointed" emoji.',
    words: [
      {
        word: "disappointed",
      },
      {
        word: "let down",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/embarrassed.gif",
    imgAlt: '"embarrassed" emoji.',
    words: [
      {
        word: "embarrassed",
      },
      {
        word: "ashamed",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/sleepy.gif",
    imgAlt: '"sleepy" emoji.',
    keyword: "sleepy",
    words: [
      {
        word: "sleepy",
      },
      {
        word: "tired",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/peaceful.gif",
    imgAlt: '"peaceful" emoji.',
    words: [
      {
        word: "peaceful",
      },
      {
        word: "...",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/thankful.gif",
    imgAlt: '"thankful" emoji.',
    keyword: "thankful",
    words: [
      {
        word: "thankful",
      },
      {
        word: "grateful",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/sick.gif",
    imgAlt: '"sick" emoji.',
    words: [
      {
        word: "sick",
      },
      {
        word: "ill",
      },
    ],
  },
  {
    imgSrc: "/assets/img/gif/i-dont-know.gif",
    imgAlt: '"i-dont-know" emoji.',
    word: "I dont know",
  },
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
          {emojis.map((emoji, emojiIndex) => (
            <div
              key={emojiIndex}
              className={`img-customization ${styles["emoji-inner-container"]}`}
            >
              <Image
                src={emoji.imgSrc}
                alt={emoji.imgAlt}
                width={50}
                height={50}
                className={styles["emoji-size"]}
              />
              {emoji.words && emoji.words.map((word, wordIndex) => (
                <p key={wordIndex}>{word.word}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
