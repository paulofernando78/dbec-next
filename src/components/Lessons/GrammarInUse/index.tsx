import { Card } from "@/components/Cards/Card";
import React from "react";

interface Example {
    example: string
}

interface Lesson {
    section: string
    text: string
    examples: Example[]
}

interface GrammarInUseProps {
    lessons: Lesson[]
}

export const GrammarInUse = ({ lessons }:GrammarInUseProps) => {
  return (
    <>
      <div className="line-break">
        {lessons.map((lesson, indexSection) => (
          <div key={indexSection} className="line-break">
            <Card bgColor="#FF5252" textColor="white">
              <p className="bold">{lesson.section}</p>
            </Card>
            <div className="line-break">
                <p>{lesson.text}</p>
                <div>
                    {lesson.examples.map((example, indexExample) => (
                      <p key={indexExample}><span className="bold">•</span> {example.example}</p>
                    ))}
                </div>
            </div>
          </div>
        ))}
        <Card bgColor="lightgray">
            <p className="bold">Exercises</p>
        </Card>
      </div>
    </>
  );
};
