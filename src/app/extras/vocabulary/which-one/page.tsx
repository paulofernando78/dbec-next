import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

export default function WhichOne() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        descriptions={["Which one?"]}
      />
      <div className="line-break">
        <div>
          <p className="bold">jump to:</p>

          {/* ... */}
          <a href="#...">
            <p>...</p>
          </a>

          {/* look vs. seem */}
          <a href="#look-seem">
            <p>look vs. seem</p>
          </a>
          {/*  meanwhile vs. meantime*/}
          <a href="#...">
            <p>meanwhile vs. meantime</p>
          </a>
          {/* speak vs. talk vs. say vs. tell */}
          <a href="#...">
            <p>speak vs. talk vs. say vs. tell</p>
          </a>

          <a href="#...">
            <p>...</p>
          </a>
        </div>

        {/* Words */}
        <div className="line-break">
          {/* look vs. seem */}
          <div id="look-seem">
            <p>look vs. seem</p>
            <div>
              <p>
                <DictionaryCard
                  keyword="look"
                  label="look"
                  audioSrc="/l/look.mp3"
                />{" "}
                <span className="portuguese">(+ baseado na aparência)</span>
              </p>
              <p>
                • He looks happy today.{" "}
                <span className="portuguese">Hoje ele parece estar feliz.</span>
              </p>
            </div>
            <div>
              <p>
                <DictionaryCard
                  keyword="seem"
                  label="seem"
                  audioSrc="/s/seem.mp3"
                />{" "}
                <span className="portuguese">(+ baseado na opnião)</span>
              </p>
              <p>
                • It seems like...{" "}
                <span className="portuguese">Parece que...</span>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
