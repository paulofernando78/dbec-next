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
    component: DictionaryCard,
    props: {
      audioSrc: "/assets/audio/dictionary/g/good.mp3",
      label: "good",
    },
    altLabel: "ok",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "happy",
    },
    altLabel: "happy",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "sad",
    },
    altLabel: "sad",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "angry",
    },
    altLabel: "angry",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "annoyed",
    },
    altLabel: "annoyed",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "calm",
      altLabel: "calm",
    },
  },
  // {

  //   altLabel: "...",
  //   label: "in love",
  // },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "crazy",
    },
    altLabel: "crazy",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "tired",
    },
    altLabel: "tired",
  },
  // {

  //   altLabel: "...",
  //   label: "worried",
  // },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "anxious",
    },
    altLabel: "anxious",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "bored",
    },
    altLabel: "bored",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "silly",
    },
    altLabel: "silly",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "scared",
    },
    altLabel: "scared",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "thoughtful",
    },
    altLabel: "thoughtful",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "frustrated",
    },
    altLabel: "frustrated",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "disappointed",
    },
    altLabel: "disappointed",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "embarrassed",
    },
    altLabel: "embarrassed",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "sleepy",
    },
    altLabel: "sleepy",
  },
  // {

  //   altLabel: "...",
  //   label: "lazy",
  // },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "strong",
    },
    altLabel: "strong",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "peaceful",
    },
    altLabel: "peaceful",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "thankful",
    },
    altLabel: "thankful",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "sick",
    },
    altLabel: "sick",
  },
  {
    component: DictionaryCard,
    props: {
      audioScr: "/assets/audio/dictionary/",
      label: "I don't know",
    },
    altLabel: "I don't know",
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
              <p>{emoji.component && <emoji.component {...emoji.props} />}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
