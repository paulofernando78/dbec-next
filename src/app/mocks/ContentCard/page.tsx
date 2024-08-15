import { ContentCard } from "@/components/Cards/ContentCard";

const contents = [
    {
      subContents: [
        {
          bgColor: "black",
          textColor: "white",
          label: "...",
          contents: [
           {
          content: "...",
        },
        {
          link: "...",
          linkLabel: "Test ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ",
        },
        {
          globeLink: "...",
          globeLabel: "Test ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ",
        },
        {
          checkboxLink: "...",
          checkboxLabelLink: "Test ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ",
        },
          ],
        },
      ],
    },
  ];

export default function ContentCardComponent() {
  return (
    <ContentCard contents={contents} />
  )
}
