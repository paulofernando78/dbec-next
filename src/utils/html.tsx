import parse from "html-react-parser";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export function convertToComponent(text: string) {
  const options = {
    replace: (domNode: any) => {
        console.log(domNode)
      if (domNode.attribs && domNode.name === "audio") {
        const { label, src } = domNode.attribs;
        return <DictionaryCard label={label} audioSrc={src} />;
      }
    },
  };

  return parse(text, options);
}