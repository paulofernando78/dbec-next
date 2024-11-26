"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { LessonTemplate } from "@/components/Templates/LessonData/Index";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

const lesson21 =
  "/assets/data/materials/specific-purposes/business/sbelaa/lesson-21.json";

export default function SpeakBusinessEnglishLikeAnAmericanLesson21() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(lesson21)
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

  return (
    <UnderConstruction
      title="Specific Purposes"
      subtitle="Business"
      descriptions={[
        "Speak English Like an American",
        "Lesson 21 • Explaining That You're Feeling Overworked",
      ]}
    />
  );
}
