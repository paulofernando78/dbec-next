import { AudioPlayer } from "@/components/Audioplayer";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";

export default function Aviation() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Aviation" />
      <div className="line-break">
        <DictionaryCard
          label="pneumatic boots"
          audioSrc="/p/pneumatic-boots.mp3"
        />
        <AudioPlayer audioSrc="" />
        <p className="bold">How do pneumatic boots work in aviation?</p>
        <p>
          During expansion, the boots are inflated by pneumatic pressure that
          breaks away the ice. They are then deflated by vacuum suction. When
          not in use, the system will continuously apply a vacuum to hold the
          boots tightly against the aircraft while not in use.
        </p>
      </div>
    </>
  );
}
