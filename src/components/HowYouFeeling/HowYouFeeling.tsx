import Image from "next/image";
import style from "./HowYouFelling.module.css";

// Components
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { DictionaryCard } from "../DictionaryCard/DictionaryCard";
import { Component } from "react";

// Dynamically import all images in the gif directory
const images = require.context(
  "../../../public/assets/img/gif",
  false,
  /\.(gif)$/
);

const emojis = [
  {
    altLabel: "ok",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/g/good.mp3",
      label: "good",
    },
  },
  {
    altLabel: "happy",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/h/happy.mp3",
      label: "happy",
    },
  },
  {
    altLabel: "sad",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/sad.mp3",
      label: "sad",
    },
  },
  {
    altLabel: "angry",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/a/angry.mp3",
      label: "angry",
    },
  },
  {
    altLabel: "annoyed",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/a/annoyed.mp3",
      label: "annoyed",
    },
  },
  {
    altLabel: "calm",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/c/calm.mp3",
      label: "calm",
    },
  },
  // {
  //   altLabel: "...",
  //   label: "in love",
  // },
  {
    altLabel: "crazy",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/c/crazy.mp3",
      label: "crazy",
    },
  },
  {
    altLabel: "tired",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/t/tired.mp3",
      label: "tired",
    },
  },
  // {
  //   altLabel: "...",
  //   label: "worried",
  // },
  {
    altLabel: "anxious",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/a/anxious.mp3",
      label: "anxious",
    },
  },
  {
    altLabel: "bored",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/b/bored.mp3",
      label: "bored",
    },
  },
  {
    altLabel: "silly",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/silly.mp3",
      label: "silly",
    },
  },
  {
    altLabel: "scared",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/scared.mp3",
      label: "scared",
    },
  },
  {
    altLabel: "thoughtful",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/t/thoughtful.mp3",
      label: "thoughtful",
    },
  },
  {
    altLabel: "frustrated",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/f/frustrated.mp3",
      label: "frustrated",
    },
  },
  {
    altLabel: "disappointed",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/d/disappointed.mp3",
      label: "disappointed",
    },
  },
  {
    altLabel: "embarrassed",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/e/embarrassed.mp3",
      label: "embarrassed",
    },
  },
  {
    altLabel: "sleepy",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/sleepy.mp3",
      label: "sleepy",
    },
  },
  // {

  //   altLabel: "...",
  //   label: "lazy",
  // },
  {
    altLabel: "strong",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/strong.mp3",
      label: "strong",
    },
  },
  {
    altLabel: "peaceful",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/p/peaceful.mp3",
      label: "peaceful",
    },
  },
  {
    altLabel: "thankful",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/t/thankful.mp3",
      label: "thankful",
    },
  },
  {
    altLabel: "sick",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/s/sick.mp3",
      label: "sick",
    },
  },
  {
    altLabel: "I don't know",
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/i/I-dont-know.mp3",
      label: "I don't know",
    },
  },
];

export default function HowYouFeeling() {
  return (
    <>
      <div className="line-break">
        <AudioPlayer audioSrc="/assets/audio/how-you-feeling.mp3" />
        <h3 className={style["feeling"]}>How are you feeling today?</h3>
        <div className={style["emoji-container"]}>
          {emojis.map((emoji) => (
            <div key={emoji.label} className={style["emoji-inner-container"]}>
              <Image
                src={images(`./${emoji.props.label}.gif`)} // Use dynamic image import
                alt={emoji.altLabel}
                className={style["emoji-size"]}
              />
              <p>{emoji.component && <DictionaryCard {...emoji.props} />}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
