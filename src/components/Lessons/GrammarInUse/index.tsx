import { Card } from "@/components/Cards/Card";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

interface SubContent {
  cardLabel: string;
  text: string;
  examples: Example[];
}

interface Example {
  example: string;
}

interface Content {
  imgSrc?: StaticImageData;
  imgAlt?: string;
  imgWidth?: string;
  text?: string;
  examples?: Example[];
  subContents?: SubContent[];
}

interface Lesson {
  cardBgColor: string;
  cardTextColor: string;
  cardLabel: string;
  contents: Content[];
}

interface GrammarInUseProps {
  lessons: Lesson[];
}

export const GrammarInUse = ({ lessons }: GrammarInUseProps) => {
  return (
    <>
      <div className="line-break">
        {/* Lessons */}
        {lessons.map((lesson, indexSection) => (
          <div key={indexSection} className="line-break">
            {/* cardLabel */}
            <Card bgColor={lesson.cardBgColor} textColor={lesson.cardTextColor}>
              <p className="bold">{lesson.cardLabel}</p>
            </Card>

            {/* contents */}
            {lesson.contents.map((content, contentIndex) => (
              <div key={contentIndex} className="line-break">
                {/* imgSrc imgAlt */}
                {content.imgSrc && content.imgAlt && content.imgWidth && (
                  <Image
                    src={content.imgSrc}
                    alt={content.imgAlt}
                    className="img-border"
                    style={{ width: content.imgWidth, margin: "auto" }}
                  />
                )}

                {/* text */}
                {content.text && <p className="bold">{content.text}</p>}

                {/* examples */}
                {}
                <div>
                  {content.examples?.map((example, exampleIndex) => (
                    <div key={exampleIndex}>
                      <p>
                        <span className="bold">•</span>{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: example.example,
                          }}
                        />
                      </p>
                    </div>
                  ))}
                </div>

                {/* subContents */}
                {content.subContents?.map((subContent, subContentIndex) => (
                  <>
                    <Card
                      bgColor="lightgray"
                      textColor="black"
                      key={subContentIndex}
                    >
                      <p className="bold">{subContent.cardLabel}</p>
                    </Card>
                    <p>{subContent.text}</p>
                    {subContent.examples.map((example, exampleIndex) => (
                      <p key={exampleIndex}>
                        <span className="bold">•</span>{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: example.example,
                          }}
                        />
                      </p>
                    ))}
                  </>
                ))}
              </div>
            ))}
          </div>
        ))}
        <Card bgColor="lightgray">
          <p className="bold">Exercises</p>
        </Card>
      </div>
    </>
  );
};