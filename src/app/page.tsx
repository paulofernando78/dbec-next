import HowYouFeeling from "@/components/HowYouFeeling/HowYouFeeling";
import { Welcome } from "@/components/Welcome/Welcome";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Home() {
  return (
    <main>
      <Whiteboard title="Dashboard" />
      <div className="line-break">
        <Welcome />
        <HowYouFeeling />
        <textarea className="textarea"></textarea>
      </div>
    </main>
  );
}
