import Image from "next/image";

import { AudioPlayer } from "../../Atoms/AudioPlayer";
import { DictionaryCard } from "../../DictionaryCard/DictionaryCard";

// CSS
import styles from "./styles.module.css";

const emojis = [
  {
    imgSrc: "/assets/img/gif/good.gif",
    imgAlt: "\"thumb\" up emoji.",
    keyword: "good",
    word: "good",
  },
  {
    imgSrc: "/assets/img/gif/happy.gif",
    imgAlt: "\"happy\" emoji.",
    keyword: "happy",
    word: "happy",
  },
  {
    imgSrc: "/assets/img/gif/sad.gif",
    imgAlt: "\"sad\" emoji.",
    keyword: "sad",
    word: "sad",
  },
  {
    imgSrc: "/assets/img/gif/angry.gif",
    imgAlt: "\"angry\" emoji.",
    keyword: "angry",
    word: "angry",
  },
  {
    imgSrc: "/assets/img/gif/annoyed.gif",
    imgAlt: "\"annoyed\" emoji.",
    keyword: "annoy",
    word: "annoyed",
  },
  {
    imgSrc: "/assets/img/gif/calm.gif",
    imgAlt: "\"calm\" emoji.",
    keyword: "calm",
    word: "calm",
  },
  {
    imgSrc: "/assets/img/gif/crazy.gif",
    imgAlt: "\"crazy\" emoji.",
    keyword: "crazy",
    word: "crazy",
  },
  {
    imgSrc: "/assets/img/gif/tired.gif",
    imgAlt: "\"tired\" emoji.",
    keyword: "tired",
    word: "tired",
  },
  {
    imgSrc: "/assets/img/gif/anxious.gif",
    imgAlt: "\"anxious\" emoji.",
    keyword: "anxious",
    word: "anxious",
  },
  {
    imgSrc: "/assets/img/gif/bored.gif",
    imgAlt: "\"bored\" emoji.",
    keyword: "bored",
    word: "bored",
  },
  {
    imgSrc: "/assets/img/gif/silly.gif",
    imgAlt: "\"silly\" emoji.",
    keyword: "silly",
    word: "silly",
  },
  {
    imgSrc: "/assets/img/gif/scared.gif",
    imgAlt: "\"scared\" emoji.",
    keyword: "scared",
    word: "scared",
  },
  {
    imgSrc: "/assets/img/gif/thoughtful.gif",
    imgAlt: "\"thoughtful\" emoji.",
    keyword: "thoughtful",
    word: "thoughtful",
  },
  {
    imgSrc: "/assets/img/gif/frustrated.gif",
    imgAlt: "\"frustrated\" emoji.",
    keyword: "frustrate",
    word: "frustrated",
  },
  {
    imgSrc: "/assets/img/gif/disappointed.gif",
    imgAlt: "\"disappointed\" emoji.",
    keyword: "disappoint",
    word: "disappointed",
  },
  {
    imgSrc: "/assets/img/gif/embarrassed.gif",
    imgAlt: "\"embarrassed\" emoji.",
    keyword: "embarrassed",
    word: "embarrassed",
  },
  {
    imgSrc: "/assets/img/gif/sleepy.gif",
    imgAlt: "\"sleepy\" emoji.",
    keyword: "sleepy",
    word: "sleepy",
  },
  {
    imgSrc: "/assets/img/gif/peaceful.gif",
    imgAlt: "\"peaceful\" emoji.",
    keyword: "peaceful",
    word: "peaceful",
  },
  {
    imgSrc: "/assets/img/gif/thankful.gif",
    imgAlt: "\"thankful\" emoji.",
    keyword: "thankful",
    word: "thankful",
  },
  {
    imgSrc: "/assets/img/gif/sick.gif",
    imgAlt: "\"sick\" emoji.",
    keyword: "sick",
    word: "sick",
  },
  {
    imgSrc: "/assets/img/gif/i-dont-know.gif",
    imgAlt: "\"i-dont-know\" emoji.",
    keyword: "i-dont-know",
    word: "I dont know",
  }
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
              className={styles["emoji-inner-container"]}
            >
              <Image
                src={emoji.imgSrc}
                alt={emoji.imgAlt}
                className={styles["emoji-size"]} // Use 'styles' instead of 'style'
                width={50} // Adjust width as needed
                height={50} // Adjust height as needed
              />
              <p>
                <DictionaryCard keyword={emoji.keyword} word={emoji.word}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
