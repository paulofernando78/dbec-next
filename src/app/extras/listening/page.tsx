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
            link: "/extras/listening/penguin-kids",
            linkLabel: "Penguin Kids",
          },
          {
            link: "/extras/listening/penguin-readers",
            linkLabel: "Penguin Readers",
          },
        ],
      },
      // Articles
      {
        label: "Articles (Intermediate)",
        contents: [
          {
            globeLink: "/extras/listening/articles/arts-and-culture",
            globeLabel: "Arts & Culture",
          },
          {
            globeLink: "/extras/listening/articles/health-and-lifestyle",
            globeLabel: "Health & Lifestyle",
          },
          {
            globeLink: "/extras/listening/articles/science-and-technology",
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
];

export default function Listening() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Listening" />
      <div>
        <DescriptionCard descriptions={descriptions} />
      </div>
    </>
  );
}
