import { BeginnerBoardCard } from "@/components/Cards/BoardCard/Courses/BeginnerBoardCard";
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
              <span className="bold">Mr. = Mister</span> <span className="phonetics"> /ˈmɪs.tɚ/ </span>= Single or married male
            </p>
            <p>
              <span className="bold">Mrs.</span><span className="phonetics"> /ˈmɪs.ɪz/</span> = Married females
            </p>
            <p>
              <span className="bold">Ms.</span> <span className="phonetics">/mɪz/</span> Single or Married females
            </p>
            <p>
              <span className="bold">Miss.</span> <span className="phonetics">/mɪs/</span> Single females
            </p>
          </div>
        </div>
      </BeginnerBoardCard>
    </>
  );
};

export default Titles;
