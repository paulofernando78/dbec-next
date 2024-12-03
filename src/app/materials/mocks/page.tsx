import Link from "next/link";

import {
  AudioPlayer,
  Card,
  DictionaryCard,
  FillInTheBlanks,
  FlipCard,
  Radio,
  SwiperFraction,
  Whiteboard,
} from "@/components";

import { animalCat1, animalCat2 } from "@/img/index";
import { Dropdown } from "@/components/Molecules/ExerciseTemplates/Dropdown";

const flipCards = [
  {
    // width: "..."
    // height: "..."
    frontText: "What's the past of ask?",
    backText: "asked",
  },
  {
    frontText: "...  ",
    backText: "...",
  },
  {
    imgSrc: animalCat1,
    imgAlt: "A cat",
  },
];

export default function Mocks() {
  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <div className="line-break">
          
          {/* Create lesson*/}
          <p className="bold">Create lessons:</p>
          <div>
            <Link href="\materials\mocks\lesson-data\">
              <p>Lesson Data</p>
            </Link>
          </div>

          {/* Componets */}
          <div>
            <p className="bold">Components</p>
            <Link href="/materials/mocks/ContentCard">
              <p>ContentCard</p>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
