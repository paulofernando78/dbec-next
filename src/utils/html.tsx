import parse from "html-react-parser";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export function htmlParser(text: string) {
  const options = {
    replace: (domNode: any) => {
        console.log(domNode)
      if (domNode.attribs && domNode.name === "audio") {
        const { label, src } = domNode.attribs;
        return <DictionaryCard word={label} audioSrc={src} />;
      }
    },
  };

  return parse(text, options);
}