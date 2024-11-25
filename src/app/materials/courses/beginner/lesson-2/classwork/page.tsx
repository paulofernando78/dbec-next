"use client";

import { useEffect, useState } from "react";
import { LessonTemplate } from "@/components/Templates/LessonData/Index";

export default function CoursesBeginnerLesson2() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/assets/data/materials/courses/beginner/lesson-2/classwork.json")
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
    <>
      <LessonTemplate lessonData={lessonData} />
    </>
  );
}
