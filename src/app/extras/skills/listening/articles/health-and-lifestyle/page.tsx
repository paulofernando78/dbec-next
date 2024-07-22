import Link from "next/link";
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
          {
            link: "/extras/skills/listening/articles/health-and-lifestyle/weight-loss-options-for-chilren-are-hard-to-get",
            linkLabel: "Weight-loss Options for Children Are Hard to Get (June 24, 2024)",
          },
          {
            link: "/extras/skills/listening/articles/health-and-lifestyle/researchers-find-gene-behind-disorder-causing-intellectual-disability",
            linkLabel: "Researchers Find Gene behind Disorder Causing Intellectual Disability(June 24, 2024)",
          },
          {
            link: "/extras/skills/listening/articles/health-and-lifestyle/scientists-test-mrna-vaccines-to-protect-against-bird-flu",
            linkLabel: "Scientists Test mRNA Vaccines to Protect Against Bird Flu (June 10, 2024)",
          },
          {
            link: "/extras/skills/listening/articles/health-and-lifestyle/five-tips-to-get-better-sleep",
            linkLabel: "Five Tips to Get Better Sleep (April 29, 2024)",
          },
          {
            link: "/extras/skills/listening/articles/health-and-lifestyle/study-humans-give-more-viruses-to-animals-than-they-give-us",
            linkLabel: "Study: Humans Give More Viruses to Animals Than They Give Us (April 08, 2024)",
          }
        ],
      },
    ],
  },
];

export default function HealthAndLifestyle() {
  return (
    <>
      <Whiteboard
        title="Listening / Reading / Speaking"
        subtitle="Articles"
        descriptions={["Health & Lifestyle"]}
      />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}