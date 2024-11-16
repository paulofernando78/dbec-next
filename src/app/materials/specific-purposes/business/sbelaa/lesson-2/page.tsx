"use client";

import { useEffect, useState } from "react";
import { SbellaLessonTemplate } from "@/components/Templates/Specific-Purposes/Business/Sbella/Index";
import { SbelaaLessonTemplateProps } from "@/types/materials/specific-purposes/business/sbelaa/sbelaa";

export default function SpecificPurposesBusinessSbellaLesson2() {
  const [lessonData, setLessonData] =
    useState<SbelaaLessonTemplateProps | null>(null);

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

  return <SbellaLessonTemplate data={lessonData} />;
}
