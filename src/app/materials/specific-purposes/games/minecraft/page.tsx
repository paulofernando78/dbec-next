import { VideoPlayer } from "@/components/Atoms/VideoPlayer/VideoPlayer";
import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import React from "react";

export default function Minecraft() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Games"
        descriptions={["Minecraft"]}
      />
      <div className="line-break">
        <VideoPlayer videoSrc="https://www.youtube.com/embed/O0PozHc7Rrk?si=6ohyDBhMPmO1vSzO" />
        <p>Things we can do in the game.</p>
        <div>
          <p>• Create a new world</p>
          <p>• Choose between "Survival" and "Creative".</p>
          <p>• Choose among "Peaceful", "Easy", "Normal", and "Hard".</p>
          <p>• Search a place / an area to build a basic shelter.</p>
          <p>• Search for a near river or an ocean to travel long distances.</p>
          <p>• Also search for a near florest to gather wood.</p>
          <p>
            • Search for sheeps to collect (get) wool to make a bed. Beds are
            important to sleep through the night, because monsters come out, and
            it's dangerous.
          </p>
          <p>• If possible search for a village.</p>
          <p>
            • We can trade with villlagers many things, such as emerald, etc.
          </p>
          <p>• Things to do:</p>
          <p>- collect/chop wood to build a shelter</p>
          <p>- kill sheeps to collect wool to make a bed</p>
          <p>- collect sugar cane to make papers, maps and books</p>
          <p>• Make 4 planks with 1 wood.</p>
          <p>• Make a crafting table With 4 planks. Now we can make tools.</p>
        </div>
      </div>
    </>
  );
}
