"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { Lesson } from "@/components/index";

const VOALink =
  "/assets/data/materials/extras/skills/listening/articles/health-and-lifestyle/doctors-give-new-guidelines-for-preventing-stroke.json";

export default function LessonData() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(VOALink)
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
      <Lesson lessonData={lessonData} isUnderConstruction={false} />
    </>
  );
}
