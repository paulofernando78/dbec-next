import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DescriptionCard } from "@/components/Cards/DescriptionCard";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "By date",
        contents: [
          // Businesses Recover from Major Worldwide Tech Outage (July 24, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/business-recover-from-major-worldwide-tech-outage",
            linkLabel: "Businesses Recover from Major Worldwide Tech Outage (July 24, 2024)",
          },
          // Microsoft Announces New PCs with Built-in AI (May 23, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/microsoft-announces-new-pcs-with-ai",
            linkLabel: "Microsoft Announces New PCs with Built-in AI (May 23, 2024)",
          },
          // Florida Approves Law Banning Social Media for Children under 14 (March 27, 2024)
          {
            link: "/extras/skills/listening/articles/science-and-technology/florida-approves-law-banning-social-media",
            linkLabel: "Florida Approves Law Banning Social Media for Children under 14 (March 27, 2024)",
          },
          // Israeli Scientists Announce Creation of Embryo Model in Lab (September 11, 2023)
          {
            link: "/extras/skills/listening/articles/science-and-technology/israeli-scientists-announce-creation-of-embryo-model-in-lab",
            linkLabel: "Israeli Scientists Announce Creation of Embryo Model in Lab (September 11, 2023)",
          },
        ],
      },
    ],
  },
];

export default function ScienceAndTechnologyArticles() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={["Articles", "Science & Technology"]}
      />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
