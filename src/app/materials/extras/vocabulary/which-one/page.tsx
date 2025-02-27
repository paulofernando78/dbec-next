import { DictionaryCard } from "@components/Molecules/Cards/DictionaryCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import React from "react";
import { DictionarySearch } from "@/components/Molecules/DictionarySearch/DictionarySearch";

const lists = [
  { text: "advice vs. advise" },
  { text: "affect vs. effect" },
  { text: "among vs. between" },
  { text: "borrow vs. lend" },
  { text: "bring vs. take" },
  { text: "do vs. make" },
  { text: "hear vs. listen" },
  { text: "lose vs. miss" },
  { text: "look vs. seem" },
  { text: "meanwhile vs. meantime" },
  { text: "pretend vs. intend" },
  { text: "raise vs. rise" },
  { text: "remember vs. remind" },
  { text: "say vs. tell" },
  { text: "speak vs. talk" },
  { text: "salary vs. wage" },
  { text: "steal vs. rob" },
  { text: "stop vs. finish" },
  { text: "speak vs. talk vs. say vs. tell" },
  { text: "wish vs. hope" },
  { text: "work vs. job" },
  { text: "write vs. write down" },
];

export default function WhichOne() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        descriptions={["Which one?"]}
      />
      <div className="line-break">
        <DictionarySearch />
        <ul>
          {lists.map((list, index) => (
            <li key={index}>{list.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
