"use client";
import styled from "styled-components";

const AudioPlayerCustomization = styled.div`
  audio {
    width: 100%;
    height: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: #f0f0f0;
  }
`

export const AudioPlayer = ({ audioSrc }) => {
  return (
    <AudioPlayerCustomization>
      <audio controls src={audioSrc} />
    </AudioPlayerCustomization>
  );
};
