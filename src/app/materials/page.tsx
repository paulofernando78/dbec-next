
import { DictionarySearch } from "@/components/Molecules/DictionarySearch";
import HowYouFeeling from "@/components/Molecules/HowYouFeeling";
import { Welcome } from "@/components/Molecules/Welcome";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Material() {
  return (
    <>
      <Whiteboard title="Home" />
      <div className="line-break">
        <DictionarySearch />
        <Welcome />
        <HowYouFeeling />
        
      </div>
    </>
  );
}
