import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
  // Listening
  {
    mainLabel: "Listening",
    subDescriptions: [
      // Audiobooks
      {
        bgColor: "lightgray",
        textColor: "black",
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
        bgColor: "lightgray",
        textColor: "black",
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
            globeLink:
              "/extras/skills/listening/articles/science-and-technology",
            globeLabel: "Science & Technology",
          },
        ],
      },
      // Radios
      {
        bgColor: "lightgray",
        textColor: "black",
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
        bgColor: "lightgray",
        textColor: "black",
        label: "Links",
        contents: [
          {
            globeLink: "https://chatgpt.com/",
            globeLabel: "ChatGPT ",
          },
          {
            globeLink: "https://youglish.com/",
            globeLabel: "Youglish ",
          },
          {
            globeLink: "https://www.playphrase.me/",
            globeLabel: "Play Phrase ",
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
        bgColor: "lightgray",
        textColor: "black",
        label: "Links",
        contents: [
          {
            globeLink: "https://www.phrasemix.com/",
            globeLabel: "Phrase Mix",
          },
          {
            globeLink: "https://www1.folha.uol.com.br/internacional/en/",
            globeLabel: "Folha de São Paulo (English Version)",
          },
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
        bgColor: "lightgray",
        textColor: "black",
        label: "Topics",
        contents: [
          {
            globeLink: "...",
            globeLabel: "...",
          },
        ],
      },
    ],
  },
  // Writing
  {
    mainLabel: "Writing",
    subDescriptions: [
      // Writing
      {
        bgColor: "lightgray",
        textColor: "black",
        label: "Topics",
        contents: [
          {
            globeLink: "...",
            globeLabel: "...",
          },
        ],
      },
    ],
  },
  // Miscellaneous
  {
    mainLabel: "Miscellaneous",
    subDescriptions: [
      
      // Links
      {
        bgColor: "lightgray",
        textColor: "black",
        label: "Links",
        contents: [
          {
            globeLink: "https://chatgpt.com/",
            globeLabel: "ChatGPT",
          },
          {
            globeLink: "...",
            globeLabel: "Gemini",
          },
          {
            globeLink: "...",
            globeLabel: "Lhama",
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
