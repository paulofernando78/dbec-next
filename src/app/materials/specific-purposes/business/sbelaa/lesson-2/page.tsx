"use client";

import { useEffect, useState } from "react";
import { LessonTemplate } from "@/components/Templates/LessonData/Index";
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";

export default function SpecificPurposesBusinessSbellaLesson2() {
  const [lessonData, setLessonData] = useState<LessonTemplateProps | null>(null);

  useEffect(() => {
    fetch(
      "/assets/data/materials/specific-purposes/business/sbelaa/lesson-2.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data) => setLessonData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!lessonData) return <p>Loading...</p>;

  return <LessonTemplate lessonData={lessonData} />;
}
