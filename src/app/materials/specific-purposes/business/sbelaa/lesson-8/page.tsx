"use client";

import { useEffect, useState } from "react";
import { SbellaLessonTemplate } from "@/components/Templates/Specific-Purposes/Business/Sbella/Index";
import { LessonData } from "@/types/materials/specific-purposes/business/sbelaa/sbelaa";

export default function SpecificPurposesBusinessSbellaLesson8() {
  const [lessonData, setLessonData] = useState<LessonData | null>(null);

  useEffect(() => {
    fetch(
      "/assets/data/materials/specific-purposes/business/sbelaa/lesson-8.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data) => setLessonData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!lessonData) return <p>Loading...</p>;

  return <SbellaLessonTemplate data={lessonData} />;
}
