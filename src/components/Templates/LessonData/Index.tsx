"use client";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";
import React from "react";

import { DynamicRender } from "@/components/Templates/index-temp";

type ComponentType = {
  component: string;
data : {
  [key: string]: any;
}
options?: {
  [key: string]: any;
}
};

export const LessonTemplate = ({
  lessonData,
  isUnderConstruction,
}: LessonTemplateProps) => {
  if (!lessonData) {
    return null;
  }
  console.log(lessonData.lessons);
  const components:ComponentType[] = [
    { component: "Whiteboard", data: {...lessonData.whiteboard} },
    { component: "Lesson", data: lessonData.lessons[0] }
  ];
  return (
    // <div className="line-break">
    //   {lessonData.whiteboard && (
    //     <Whiteboard
    //       title={lessonData.whiteboard.title}
    //       subtitle={lessonData.whiteboard.subtitle}
    //       descriptions={lessonData.whiteboard.descriptions}
    //       subDescription={lessonData.whiteboard.subDescription}
    //     />
    //   )}

    //   {isUnderConstruction && <UnderConstruction />}

    //   {lessonData.lessons.map((lesson, lessonIndex) => (
   
    //   ))}
    // </div>
    <div>
      <DynamicRender components={components}/>
    </div>
  );
};
