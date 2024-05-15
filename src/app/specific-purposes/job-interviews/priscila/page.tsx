import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import React from "react";

export default function Priscila() {
  return (
    <div className="line-break">
      <p>
        <b>Resúme</b>
      </p>
      <div>
        <p>slow</p>
        <AudioPlayer audioSrc="/assets/audio/priscila-slow.mp3" />
      </div>
      <div>
        <p>fast</p>
        <AudioPlayer audioSrc="/assets/audio/priscila-fast.mp3" />
      </div>
      <p>
        <mark>
          I have over twenty years of experience{" "}
          <span className="underline">across various</span>
        </mark>{" "}
        Legal subsystems with executive performance and expertise in Labor and
        Social Security, Union Relations, Compliance, Contracts, and LGPD in
        large multinational companies in the healthcare, consumer goods,
        chemical, agribusiness, among other sectors.
      </p>
      <p>
        <mark>
          <span className="underline">Additionally</span>
        </mark>{" "}
        , I have a solid academic background, <mark>having served as a</mark>{" "}
        Lecturer, Master Professor and Speaker in Specialization Courses on
        Social Security and Labor Law.
      </p>
      <p>
        <mark>I have</mark> solid leadership in managing challenging projects
        with strategic and preventive knowledge for legal and Compliance issues
        to mitigate legal and reputational risks. <mark>I also have</mark>{" "}
        experience in business restructuring, process management, implementation
        of labor policies, contracts, audits (due diligence) and internal
        investigations.
      </p>
      <p>
        <mark>I've developed a</mark> reputation for strategy and communication
        skills leading multidisciplinary projects, aiming to ensure normative
        compliance, mitigate labor/social security risks, and promote an ethical
        and transparent organizational culture, consistently demonstrating
        commitment to excellence and integrity in all activities.
      </p>
    </div>
  );
}
