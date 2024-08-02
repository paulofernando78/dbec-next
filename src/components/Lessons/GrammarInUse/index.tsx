import { Card } from "@/components/Cards/Card";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

interface Text {
  text: string
}

interface SubContent {
  cardLabel: string;
  texts: Text[];
  examples: Example[];
}

interface Example {
  example: string;
}

interface Text {
  text: string
}

interface Content {
  imgSrc?: StaticImageData;
  imgAlt?: string;
  imgWidth?: string;
  texts?: Text[];
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
                <div>
                  {content.texts?.map((text, textIndex) => (
                    <p dangerouslySetInnerHTML={{ __html: text.text }} key={textIndex}/>
                  ))}
                </div>

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
                    {/* cardLabel */}
                    <Card
                      bgColor="lightgray"
                      textColor="black"
                      key={subContentIndex}
                    >
                      <p className="bold">{subContent.cardLabel}</p>
                    </Card>
                    <div>
                      {/* Text */}
                      {subContent.texts.map((text, textIndex) => (
                        <p key={textIndex}>{text.text}</p>
                      ))}
                    </div>
                    {/* examples */}
                    <div>
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
                    </div>
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
