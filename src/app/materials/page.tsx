import { DescriptionCard } from "@/components/Molecules/Cards/DescriptionCard";
import HowYouFeeling from "@/components/Molecules/HowYouFeeling";
import { Welcome } from "@/components/Molecules/Welcome";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

const links = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Sites",
        contents: [
          {
            globeLink: "https://youglish.com/",
            globeLabel: "Youglish (Words from youtube videos)",
          },
          {
            globeLink: "https://www.playphrase.me/",
            globeLabel: "Play Phrase (Phrases from movies)",
          },
          {
            globeLink: "https://www.languagereactor.com/",
            globeLabel: "Language Reactor",
          },
        ],
      },
    ],
  },
];

export default function Material() {
  return (
    <>
      <Whiteboard title="Home" />
      <div className="line-break">
        <Welcome />
        <HowYouFeeling />
        <DescriptionCard descriptions={links}/>
      </div>
    </>
  );
}
