"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { Lesson } from "@/components/index";

export default function CourseIntermediateLesson43Classwork() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const CONTENTS_JSON_PATH =
    "/assets/data/materials/courses/intermediate/lesson-43/classwork.json";

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
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading lesson data.</p>;

  return <Lesson lessonData={lessonData} isUnderConstruction={true} />;
}
