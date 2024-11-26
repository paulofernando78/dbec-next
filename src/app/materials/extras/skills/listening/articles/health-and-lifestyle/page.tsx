import { ContentCard } from "@/components/Molecules/Cards/ContentCard";

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
            link: "/materials/extras/skills/listening/articles/health-and-lifestyle/doctors-give-new-guidelines-for-preventing-stroke",
            linkLabel:
              "Doctors Give New Guidelines for Preventing Stroke (June 24, 2024)",
          },
          {
            link: "/materials/extras/skills/listening/articles/health-and-lifestyle/life-is-a-video-game",
            linkLabel:
              "Life is a Video Game, These Are the Cheat Codes (August, 2024)",
          }
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
