import { Whiteboard } from "@/components/Whiteboard";
import { ContentCard } from "@/components/Cards/ContentCard";

const whiteboard = {
  title: "Listening",
  subtitle: "Articles",
  descriptions: ["Health & Lifestyle"],
};

const contents = [
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "By date",
        contents: [
          {
            link: "/materials/extras/skills/listening/articles/health-and-lifestyle/life-is-a-video-game",
            linkLabel:
              "Life is a Video Game, These Are the Cheat Codes (August, 2024)",
          },
          {
            link: "/materials/extras/skills/listening/articles/health-and-lifestyle/researchers-find-gene-behind-disorder-causing-intellectual-disability",
            linkLabel:
              "Researchers Find Gene behind Disorder Causing Intellectual Disability (June 24, 2024)",
          },
          {
            link: "/materials/extras/skills/listening/articles/health-and-lifestyle/study-humans-give-more-viruses-to-animals-than-they-give-us",
            linkLabel:
              "Study: Humans Give More Viruses to Animals Than They Give Us (April 08, 2024)",
          },
        ],
      },
    ],
  },
];

export default function HealthAndLifestyle() {
  return (
    <>
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
