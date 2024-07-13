import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
  // Listening
  {
    mainLabel: "Listening",
    subDescriptions: [
      // Audiobooks
      {
        label: "Audiobooks",
        contents: [
          {
            link: "/extras/skills/listening/penguin-kids",
            linkLabel: "Penguin Kids",
          },
          {
            link: "/extras/skills/listening/penguin-readers",
            linkLabel: "Penguin Readers",
          },
        ],
      },
      // Articles
      {
        label: "Articles (Intermediate)",
        contents: [
          {
            globeLink: "/extras/skills/listening/articles/arts-and-culture",
            globeLabel: "Arts & Culture",
          },
          {
            globeLink: "/extras/skills/listening/articles/health-and-lifestyle",
            globeLabel: "Health & Lifestyle",
          },
          {
            globeLink: "/extras/skills/listening/articles/science-and-technology",
            globeLabel: "Science & Technology",
          },
        ],
      },
      // Radios
      {
        label: "Radios",
        contents: [
          {
            globeLink: "https://laist.com/",
            globeLabel: "LAist",
          },
          {
            globeLink:
              "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
            globeLabel: "BBC Service",
          },
        ],
      },
      // Miscellaneous
      {
        label: "Miscellaneous",
        contents: [
          {
            globeLink: "https://chatgpt.com/",
            globeLabel: "ChatGPT ",
          },
          {
            globeLink: "https://learningenglish.voanews.com/",
            globeLabel: "VOA Special English ",
          },
          {
            globeLink: "https://www.cbc.ca/radio/quirks",
            globeLabel: "Quirks and Quarks ",
          },
          {
            globeLink: "https://lyricstraining.com/",
            globeLabel: "Lyrics training",
          },
        ],
      },
    ],
  },
  // Reading
  {
    mainLabel: "Reading",
    subDescriptions: [
      // Audiobooks
      {
        label: "Links",
        contents: [
          {
            globeLink: "https://www1.folha.uol.com.br/internacional/en/",
            globeLabel: "Folha de São Paulo (English Version)",
          }
        ],
      },
    ],
  },
  // Speaking
  {
    mainLabel: "Speaking",
    subDescriptions: [
      // Speaking
      {
        label: "Topics",
        contents: [
          {
            globeLink: "...",
            globeLabel: "...",
          }
        ],
      },
    ],
  },
  // Reading
  {
    mainLabel: "Writing",
    subDescriptions: [
      // Writing
      {
        label: "Topcis",
        contents: [
          {
            globeLink: "...",
            globeLabel: "...",
          }
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Skills" />
      <div>
        <DescriptionCard descriptions={descriptions} />
      </div>
    </>
  );
}
