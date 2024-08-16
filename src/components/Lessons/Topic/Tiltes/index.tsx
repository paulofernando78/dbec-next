import { BeginnerBoardCard } from "@/components/Cards/BeginnerBoardCard";
import React from "react";

const Titles = () => {
  return (
    <>
      <BeginnerBoardCard label="Titles">
        <div className="line-break">
          <p className="bold">
            <span className="portuguese">Pronomes de tratamento</span>
          </p>
          <div>
            <p>
              <span className="bold">Mr.</span> = Single or married male
            </p>
            <p>
              <span className="bold">Mrs.</span> = Married females
            </p>
            <p>
              <span className="bold">Ms.</span> Single or Married females
            </p>
            <p>
              <span className="bold">Miss.</span> Single females
            </p>
          </div>
        </div>
      </BeginnerBoardCard>
    </>
  );
};

export default Titles;
