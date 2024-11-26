"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { LessonTemplate } from "@/components/Templates/LessonData/Index";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

const lesson30 =
  "/assets/data/materials/specific-purposes/business/sbelaa/lesson-30.json";

export default function SpeakBusinessEnglishLikeAnAmericanLesson30() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(lesson30)
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
        "Lesson 30 • Negotiating a Salary Offer",
      ]}
    />
  );
}
