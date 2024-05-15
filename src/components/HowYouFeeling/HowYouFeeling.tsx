"use client"

import Image from "next/image";
import style from "./HowYouFelling.module.css";

// Components
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { DictionaryCard } from "../DictionaryCard/DictionaryCard";

// Dynamically import all images in the gif directory
const images = require.context(
  "../../../public/assets/img/gif",
  false,
  /\.(gif)$/
);

const emojis = [
  {
    altLabel: "ok",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/g/good.mp3",
      label: "good",
    },
  },
  {
    altLabel: "happy",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/h/happy.mp3",
      label: "happy",
    },
  },
  {
    altLabel: "sad",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/s/sad.mp3",
      label: "sad",
    },
  },
  {
    altLabel: "angry",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/a/angry.mp3",
      label: "angry",
    },
  },
  {
    altLabel: "annoyed",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/a/annoyed.mp3",
      label: "annoyed",
    },
  },
  {
    altLabel: "calm",
    component: (props: any) => <DictionaryCard {...props} />,
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
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/c/crazy.mp3",
      label: "crazy",
    },
  },
  {
    altLabel: "tired",
    component: (props: any) => <DictionaryCard {...props} />,
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
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/a/anxious.mp3",
      label: "anxious",
    },
  },
  {
    altLabel: "bored",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/b/bored.mp3",
      label: "bored",
    },
  },
  {
    altLabel: "silly",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/s/silly.mp3",
      label: "silly",
    },
  },
  {
    altLabel: "scared",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/s/scared.mp3",
      label: "scared",
    },
  },
  {
    altLabel: "thoughtful",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/t/thoughtful.mp3",
      label: "thoughtful",
    },
  },
  {
    altLabel: "frustrated",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/f/frustrated.mp3",
      label: "frustrated",
    },
  },
  {
    altLabel: "disappointed",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/d/disappointed.mp3",
      label: "disappointed",
    },
  },
  {
    altLabel: "embarrassed",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/e/embarrassed.mp3",
      label: "embarrassed",
    },
  },
  {
    altLabel: "sleepy",
    component: (props: any) => <DictionaryCard {...props} />,
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
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/s/strong.mp3",
      label: "strong",
    },
  },
  {
    altLabel: "peaceful",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/p/peaceful.mp3",
      label: "peaceful",
    },
  },
  {
    altLabel: "thankful",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/t/thankful.mp3",
      label: "thankful",
    },
  },
  {
    altLabel: "sick",
    component: (props: any) => <DictionaryCard {...props} />,
    props: {
      audioSrc: "/assets/audio/dictionary/s/sick.mp3",
      label: "sick",
    },
  },
  {
    altLabel: "I don't know",
    component: (props: any) => <DictionaryCard {...props} />,
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
        <div>
          <h3 className={style["feeling"]}>How are you doing?</h3>
          <h3 className={style["feeling"]}>How's it going?</h3>
          <h3 className={style["feeling"]}>How are you feeling today?</h3>
        </div>
        <div className={style["emoji-container"]}>
          {emojis.map((emoji) => (
            <div
              key={emoji.altLabel}
              className={style["emoji-inner-container"]}
            >
              <Image
                src={images(`./${emoji.props.label}.gif`)} // Use dynamic image import
                alt={emoji.altLabel}
                className={style["emoji-size"]}
              />
              <p>
                {emoji.component?.(emoji.props) && (
                  <DictionaryCard {...emoji.props} />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
