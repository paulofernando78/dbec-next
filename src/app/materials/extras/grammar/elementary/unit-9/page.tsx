"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { LessonTemplate } from "@/components/Templates/Lesson/Lesson";

export default function ExtrasGrammarElementaryUnit9() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const CONTENTS_JSON_PATH =
    "/assets/data/materials/extras/grammar/elementary/unit-9.json";

  useEffect(() => {
    fetch(CONTENTS_JSON_PATH)
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

  return <LessonTemplate lessonData={lessonData} isUnderConstruction={true} />;
}
