"use client";

import { useEffect, useState } from "react";
import { GenericLessonTemplate } from "@/components/Templates/GenericLesson/Index";
import { LessonData } from "@/types/materials/GenericLesson";

export default function SpecificPurposesBusinessSbellaLesson10() {
  const [lessonData, setLessonData] = useState<LessonData | null>(null);

  useEffect(() => {
    fetch(
      "/assets/data/materials/specific-purposes/business/sbelaa/lesson-10.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data) => setLessonData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!lessonData) return <p>Loading...</p>;

  return <GenericLessonTemplate data={lessonData} />;
}
