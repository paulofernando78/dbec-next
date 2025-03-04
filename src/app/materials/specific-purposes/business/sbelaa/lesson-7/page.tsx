"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { Lesson } from "@/components/index";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

const lesson7 =
  "/assets/data/materials/specific-purposes/business/sbelaa/lesson-7.json";

export default function SpeakBusinessEnglishLikeAnAmericanLesson7() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(lesson7)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch lesson data");
        }
        return response.json();
      })
      .then((data) => {
        setLessonData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading lesson data.</p>;

  return <Lesson lessonData={lessonData} isUnderConstruction={false} />;
}
