import { PenguinReaders } from "@/components/Extras/Listening/PenguinReaders";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

const structure = [
  {
    summaryParagraph: "...",
    summaryImgSrc:
      "/assets/img/extras/listening/penguin-readers/beginner/.../cover.jpg",
    summaryAltText: "Cover image",
    audioSrc:
      "/assets/audio/extras/listening/penguin-readers/beginner/flying-home/audio.mp3",
    paragraphs: [
      {
        paragraphNumber: "Paragraph 1",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-1.jpg",
        paragraphAltText: "Picture 1",
      },
      {
        paragraphNumber: "Paragraph 2",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-2.png",
        paragraphAltText: "Picture 2",
      },
      {
        paragraphNumber: "Paragraph 3",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-3.jpg",
        paragraphAltText: "Picture 3",
      },
      {
        paragraphNumber: "Paragraph 4",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-4.png",
        paragraphAltText: "Picture 4",
      },
      {
        paragraphNumber: "Paragraph 5",
        paragraphTime: "(...)",
        enParagraph: "T...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-5.jpg",
        paragraphAltText: "Picture 5",
      },
      {
        paragraphNumber: "Paragraph 6",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-6.jpg",
        paragraphAltText: "Picture 6",
      },
      {
        paragraphNumber: "Paragraph 7",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-7.jpg",
        paragraphAltText: "Picture 7",
      },
      {
        paragraphNumber: "Paragraph 8",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-8.jpg",
        paragraphAltText: "Picture 8",
      },
      {
        paragraphNumber: "Paragraph 9",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-9.png",
        paragraphAltText: "Picture 9",
      },
      {
        paragraphNumber: "Paragraph 10",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-10.png",
        paragraphAltText: "Picture 10",
      },
      {
        paragraphNumber: "Paragraph 11",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-11.jpg",
        paragraphAltText: "Picture 11",
      },
      {
        paragraphNumber: "Paragraph 12",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-12.jpg",
        paragraphAltText: "Picture 12",
      },
      {
        paragraphNumber: "Paragraph 13",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-13.png",
        paragraphAltText: "Picture 13",
      },
      {
        paragraphNumber: "Paragraph 14",
        paragraphTime: "(...)",
        enParagraph: "...",
        ptParagraph: "...",
        paragraphImgSrc:
          "/assets/img/extras/listening/penguin-readers/beginner/.../paragraph-14.png",
        paragraphAltText: "Picture 14",
      },
    ],
  },
];

export default function FlyingHome() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={["Penguin Readers", "Beginner", "..."]}
      />
      <div>
        <PenguinReaders structures={structure} />
      </div>
    </>
  );
}
