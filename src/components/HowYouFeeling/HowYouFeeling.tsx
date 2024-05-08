"use client";
import Image from "next/image";
import styled from "styled-components";

// Component
import { Card } from "../Card/Card";

// Images Emojis
import good from "../../../public/assets/img/gif/good.gif";
import happy from "../../../public/assets/img/gif/happy.gif";
import sad from "../../../public/assets/img/gif/sad.gif";
import angry from "../../../public/assets/img/gif/angry.gif";
import annoyed from "../../../public/assets/img/gif/annoyed.gif";
import calm from "../../../public/assets/img/gif/calm.gif";
import inLove from "../../../public/assets/img/gif/in-love.gif";
import crazy from "../../../public/assets/img/gif/crazy.gif";
import tired from "../../../public/assets/img/gif/tired.gif";
import anxious from "../../../public/assets/img/gif/anxious.gif";
import worried from "../../../public/assets/img/gif/worried.gif";
import bored from "../../../public/assets/img/gif/bored.gif";
import silly from "../../../public/assets/img/gif/silly.gif";
import scared from "../../../public/assets/img/gif/scared.gif";
import thoughtful from "../../../public/assets/img/gif/thoughtful.gif";
import frustrated from "../../../public/assets/img/gif/frustrated.gif";
import disappointed from "../../../public/assets/img/gif/disappointed.gif";
import embarrassed from "../../../public/assets/img/gif/embarrassed.gif";
import sleepy from "../../../public/assets/img/gif/sleepy.gif";
import lazy from "../../../public/assets/img/gif/sleepy.gif";
import strong from "../../../public/assets/img/gif/strong.gif";
import peaceful from "../../../public/assets/img/gif/peaceful.gif";
import thankful from "../../../public/assets/img/gif/thankful.gif";
import sick from "../../../public/assets/img/gif/sick.gif";
import idk from "../../../public/assets/img/gif/idk.gif";

// Styled Components

const Welcome = styled.h2`
text-align: center;
`
const EmojiGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
`;

const EmojiFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const emojis = [
  {
    imgSrc: good,
    altLabel: "Thumb up gif",
    label: "good",
  },
  {
    imgSrc: happy,
    altLabel: "...",
    label: "happy",
  },
  {
    imgSrc: sad,
    altLabel: "...",
    label: "sad",
  },
  {
    imgSrc: angry,
    altLabel: "...",
    label: "angry",
  },
  {
    imgSrc: annoyed,
    altLabel: "...",
    label: "annoyed",
  },
  {
    imgSrc: calm,
    altLabel: "...",
    label: "calm",
  },
  {
    imgSrc: inLove,
    altLabel: "...",
    label: "in love",
  },
  {
    imgSrc: crazy,
    altLabel: "...",
    label: "crazy",
  },
  {
    imgSrc: tired,
    altLabel: "...",
    label: "tired",
  },
  {
    imgSrc: anxious,
    altLabel: "...",
    label: "worried",
  },
  {
    imgSrc: anxious,
    altLabel: "...",
    label: "anxious",
  },
  {
    imgSrc: bored,
    altLabel: "...",
    label: "bored",
  },
  {
    imgSrc: silly,
    altLabel: "...",
    label: "silly",
  },
  {
    imgSrc: scared,
    altLabel: "...",
    label: "scared",
  },
  {
    imgSrc: thoughtful,
    altLabel: "...",
    label: "thoughtful",
  },
  {
    imgSrc: frustrated,
    altLabel: "...",
    label: "frustrated",
  },
  {
    imgSrc: disappointed,
    altLabel: "...",
    label: "disappointed",
  },
  {
    imgSrc: embarrassed,
    altLabel: "...",
    label: "embarassed",
  },
  {
    imgSrc: sleepy,
    altLabel: "...",
    label: "sleepy",
  },
  {
    imgSrc: lazy,
    altLabel: "...",
    label: "lazy",
  },
  {
    imgSrc: strong,
    altLabel: "...",
    label: "strong",
  },
  {
    imgSrc: peaceful,
    altLabel: "...",
    label: "peaceful",
  },
  {
    imgSrc: thankful,
    altLabel: "...",
    label: "thankful",
  },
  {
    imgSrc: sick,
    altLabel: "...",
    label: "sick",
  },
  {
    imgSrc: idk,
    altLabel: "...",
    label: "I don't know",
  },
];

export default function HowYouFeeling() {
  return (
    <>
      <Card>
          <div className="line-break">
              <Welcome>How are you feeling today?</Welcome>
              <EmojiGridContainer>
                {emojis.map((emoji, index) => (
                  <EmojiFlexContainer key={index}>
                    <Image
                      src={emoji.imgSrc}
                      alt={emoji.altLabel}
                      style={{ width: "60px", height: "100%" }}
                    />
                    <p>{emoji.label}</p>
                  </EmojiFlexContainer>
                ))}
              </EmojiGridContainer>
          </div>
      </Card>
    </>
  );
}
