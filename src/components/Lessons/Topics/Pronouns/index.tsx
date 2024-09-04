import { BoardCard } from "@/components/Cards/BoardCard";
import React from "react";

export const Pronouns = () => {
  return (
    <BoardCard label="Pronouns" bgColor="black" textColor="white">
      <div className="flex-8px-center-wrap">
        <BoardCard label="Subject" bgColor="lightgray" width="180px">
          <div>
            <p>I</p>
            <p>you</p>
            <p>he</p>
            <p>she</p>
            <p>it</p>
            <p>we</p>
            <p>you</p>
            <p>they</p>
          </div>
        </BoardCard>
        <BoardCard label="Object" bgColor="lightgray" width="180px">
          <div>
            <p>me</p>
            <p>you</p>
            <p>him</p>
            <p>her</p>
            <p>it</p>
            <p>us</p>
            <p>you</p>
            <p>them</p>
          </div>
        </BoardCard>
        <BoardCard
          label="Possessive Adjective"
          bgColor="lightgray"
          width="180px"
        >
          <div>
            <p>my</p>
            <p>your</p>
            <p>his</p>
            <p>her</p>
            <p>its</p>
            <p>our</p>
            <p>your</p>
            <p>their</p>
          </div>
        </BoardCard>
        <BoardCard label="Possessive Pronoun" bgColor="lightgray" width="180px">
          <div>
            <p>mine</p>
            <p>
              your<span className="red">s</span>
            </p>
            <p>
              hi<span className="red">s</span>
            </p>
            <p>
              her<span className="red">s</span>
            </p>
            <p>...</p>
            <p>
              our<span className="red">s</span>
            </p>
            <p>
              your<span className="red">s</span>
            </p>
            <p>
              their<span className="red">s</span>
            </p>
          </div>
        </BoardCard>
      </div>
    </BoardCard>
  );
};
