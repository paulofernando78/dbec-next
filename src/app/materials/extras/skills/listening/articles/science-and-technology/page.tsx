import { ContentCard } from "@/components/Molecules/Cards/ContentCard";

const whiteboard = {
  title: "Listening",
  subtitle: "Articles",
  descriptions: ["Science & Technology"],
};

const contents = [
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "By date",
        contents: [
          // Chinese Rocket Breaks Up in Space, Releasing Hundreds of Debris Pieces (August 13, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/chinese-rocket-breaks-up-in-space",
            linkLabel:
              "Chinese Rocket Breaks Up in Space, Releasing Hundreds of Debris Pieces (August 13, 2024)",
          },
          // Microsoft Announces New PCs with Built-in AI (May 23, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/microsoft-announces-new-pcs-with-ai",
            linkLabel:
              "Microsoft Announces New PCs with Built-in AI (May 23, 2024)",
          },
          // Florida Approves Law Banning Social Media for Children under 14 (March 27, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/florida-approves-law-banning-social-media",
            linkLabel:
              "Florida Approves Law Banning Social Media for Children under 14 (March 27, 2024)",
          },
          // Israeli Scientists Announce Creation of Embryo Model in Lab (September 11, 2023)
          {
            link: "/extras/skills/listening/articles/science-and-technology/israeli-scientists-announce-creation-of-embryo-model-in-lab",
            linkLabel:
              "Israeli Scientists Announce Creation of Embryo Model in Lab (September 11, 2023)",
          },
        ],
      },
    ],
  },
];

export default function ScienceAndTechnologyArticles() {
  return (
    <>
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
