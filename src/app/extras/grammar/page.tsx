import { DescriptionCard } from "@/components/DescriptionCard/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [{
  label: "Present",
  contents: [
    {
      content: "Yeahh!!!",
      linkLabel: "Unit 1 - am/is/are",
      link: "/extras/grammar/uni-1"
    }
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
