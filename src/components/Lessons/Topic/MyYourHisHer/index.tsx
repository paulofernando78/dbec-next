import { BeginnerBoardCard } from "@/components/Cards/BeginnerBoardCard";
import React from "react";

const MyYourHisHer = () => {
  return (
    <>
      <BeginnerBoardCard label="My, your, his, her">
        <p>
          <span className="beginner">■</span> Use his with males: His name is
          Travis. O nome dele é Travis
        </p>
        <p>
          <span className="beginner">■</span> Use her with females: Her name is
          Nicole. O nome dela é Nicole
        </p>
      </BeginnerBoardCard>
    </>
  );
};

export default MyYourHisHer;
