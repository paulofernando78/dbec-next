import { DescriptionCard } from "@/components/DescriptionCard/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [{
  label: "Present",
  contents: [
    {
      content: "...",
      linkLabel: "Unit 1 - am/is/are",
      link: "/extras/grammar/uni-1"
    },
    {
      linkLabel: "Unit 2 - am/is/are (questons)",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 3 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 4 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 5 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 6 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 7 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 8 - ...",
      link: "/extras/grammar/uni-"
    },
    {
      linkLabel: "Unit 9 - ...",
      link: "/extras/grammar/uni-"
    },

  ] 
}];

export default function Grammar() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
