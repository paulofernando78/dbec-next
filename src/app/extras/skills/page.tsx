import { BoardCard } from "@/components";
import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";

const contents = [
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Listening",
        contents: [
          {
            link: "Penguin Kids",
            linkLabel: "/extras/skills/listening/penguin-kids",
          },
          {
            link: "Penguin Readers",
            linkLabel: "/extras/skills/listening/penguin-readers",
          },
        ],
      },
    ],
  },
];

<ContentCard contents={contents} />;

// const contents = [
//   // Listening
//   {
//     mainLabel: "Listening",
//     subDescriptions: [
//       // Audiobooks
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Audiobooks",
//         contents: [
//           {
//             link: "/extras/skills/listening/penguin-kids",
//             linkLabel: "Penguin Kids",
//           },
//           {
//             link: "/extras/skills/listening/penguin-readers",
//             linkLabel: "Penguin Readers",
//           },
//         ],
//       },
//       // Articles
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Articles (Intermediate)",
//         contents: [
//           {
//             link: "/extras/skills/listening/articles/arts-and-culture",
//             linkLabel: "Arts & Culture",
//           },
//           {
//             link: "/extras/skills/listening/articles/health-and-lifestyle",
//             linkLabel: "Health & Lifestyle",
//           },
//           {
//             link: "/extras/skills/listening/articles/science-and-technology",
//             linkLabel: "Science & Technology",
//           },
//         ],
//       },
//       // Radios
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Radios",
//         contents: [
//           {
//             globeLink: "https://laist.com/",
//             globeLabel: "LAist",
//           },
//           {
//             globeLink:
//               "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
//             globeLabel: "BBC Service",
//           },
//         ],
//       },
//       // Miscellaneous
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Links",
//         contents: [
//           {
//             globeLink: "https://chatgpt.com/",
//             globeLabel: "ChatGPT ",
//           },
//           {
//             globeLink: "https://youglish.com/",
//             globeLabel: "Youglish ",
//           },
//           {
//             globeLink: "https://www.playphrase.me/",
//             globeLabel: "Play Phrase ",
//           },
//           {
//             globeLink: "https://learningenglish.voanews.com/",
//             globeLabel: "VOA Special English ",
//           },
//           {
//             globeLink: "https://www.cbc.ca/radio/quirks",
//             globeLabel: "Quirks and Quarks ",
//           },
//           {
//             globeLink: "https://lyricstraining.com/",
//             globeLabel: "Lyrics training",
//           },
//         ],
//       },
//     ],
//   },
//   // Reading
//   {
//     mainLabel: "Reading",
//     subDescriptions: [
//       // Audiobooks
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Links",
//         contents: [
//           {
//             globeLink: "https://www.phrasemix.com/",
//             globeLabel: "Phrase Mix",
//           },
//           {
//             globeLink: "https://www1.folha.uol.com.br/internacional/en/",
//             globeLabel: "Folha de São Paulo (English Version)",
//           },
//         ],
//       },
//     ],
//   },
//   // Speaking
//   {
//     mainLabel: "Speaking",
//     subDescriptions: [
//       // Speaking
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Topics",
//         contents: [
//           {
//             globeLink: "...",
//             globeLabel: "...",
//           },
//         ],
//       },
//     ],
//   },
//   // Writing
//   {
//     mainLabel: "Writing",
//     subDescriptions: [
//       // Writing
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Topics",
//         contents: [
//           {
//             globeLink: "...",
//             globeLabel: "...",
//           },
//         ],
//       },
//     ],
//   },
//   // Miscellaneous
//   {
//     mainLabel: "Miscellaneous",
//     subDescriptions: [
//       // Links
//       {
//         bgColor: "lightgray",
//         textColor: "black",
//         label: "Links",
//         contents: [
//           {
//             globeLink: "https://chatgpt.com/",
//             globeLabel: "ChatGPT",
//           },
//           {
//             globeLink: "...",
//             globeLabel: "Gemini",
//           },
//           {
//             globeLink: "...",
//             globeLabel: "Lhama",
//           },
//         ],
//       },
//     ],
//   },
// ];

export default function Skills() {
  return (
    <>
      <Whiteboard title="Extras" subTitle="Skills" />
      <div className="line-break">
        <BoardCard label="Listening" bgColor="black" textColor="white">
          <div>
            <Link href="">
              <p>Penguin Kids</p>
            </Link>
            <Link href="">
              <p>Penguin Readers</p>
            </Link>
          </div>
        </BoardCard>
        <BoardCard label="Reading" bgColor="black" textColor="white">
          <p></p>
        </BoardCard>
        <BoardCard label="Speaking" bgColor="black" textColor="white">
          <p></p>
        </BoardCard>
        <BoardCard label="Writing" bgColor="black" textColor="white">
          <p></p>
        </BoardCard>
        <BoardCard label="Miscellaneous" bgColor="black" textColor="white">
          <p></p>
        </BoardCard>
      </div>
      <div>
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
