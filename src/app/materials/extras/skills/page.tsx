import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

const whiteboard = {
  title: "Extras",
  subtitle: "Skills",
};

const contents = [
  // Listening
  {
    headerLabel: "Listening",
    cardContents: [
      // Audiobooks
      {
        bgColor: "lightgrey",
        textColor: "black",
        cardLabel: "Audiobooks",
        contents: [
          {
            link: "/materials/extras/skills/listening/penguin-kids",
            linkLabel: "Penguin Kids",
          },
          {
            link: "/materials/extras/skills/listening/penguin-readers",
            linkLabel: "Penguin Readers",
          },
        ],
      },
      // Articles
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Articles (Intermediate)",
        contents: [
          {
            link: "/materials//extras/skills/listening/articles/arts-and-culture",
            linkLabel: "Arts & Culture",
          },
          {
            link: "/materials//extras/skills/listening/articles/health-and-lifestyle",
            linkLabel: "Health & Lifestyle",
          },
          {
            link: "/materials//extras/skills/listening/articles/science-and-technology",
            linkLabel: "Science & Technology",
          },
        ],
      },
      // Radios
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Radios",
        contents: [
          { globeLink: "https://laist.com/", globeLabel: "LAist" },
          {
            globeLink:
              "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
            globeLabel: "BBC Service",
          },
        ],
      },
      // Links
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Links",
        contents: [
          { globeLink: "https://chatgpt.com/", globeLabel: "ChatGPT" },
          { globeLink: "https://youglish.com/", globeLabel: "Youglish" },
          {
            globeLink: "https://www.playphrase.me/",
            globeLabel: "Play Phrase",
          },
          {
            globeLink: "https://learningenglish.voanews.com/",
            globeLabel: "VOA Special English",
          },
          {
            globeLink: "https://www.cbc.ca/radio/quirks",
            globeLabel: "Quirks and Quarks",
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
    headerLabel: "Reading",
    cardContents: [
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Links",
        contents: [
          { globeLink: "https://www.phrasemix.com/", globeLabel: "Phrase Mix" },
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
    headerLabel: "Speaking",
    cardContents: [
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Topics",
        contents: [{ globeLink: "...", globeLabel: "..." }],
      },
    ],
  },
  // Writing
  {
    headerLabel: "Writing",
    cardContents: [
      {
        bgColor: "lightgray",
        textColor: "black",
        cardLabel: "Topics",
        contents: [{ globeLink: "...", globeLabel: "..." }],
      },
    ],
  },
  // Miscellaneous
  {
    headerLabel: "Miscellaneous",
    cardContents: [
      {
        bgColor: "lightgray",
        textColor: "black",
        label: "Links",
        contents: [
          { globeLink: "https://chatgpt.com/", globeLabel: "ChatGPT" },
          { globeLink: "...", globeLabel: "Gemini" },
          { globeLink: "...", globeLabel: "Lhama" },
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
