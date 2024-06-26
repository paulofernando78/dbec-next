import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
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
  {
    label: "Articles (Intermediate +)",
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
  {
    label: "Radios",
    contents: [
      {
        globeLink: "https://laist.com/",
        globeLabel: "LAist",
      },
      {
        globeLink: "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
        globeLabel: "BBC Service",
      },
    ],
  },

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
