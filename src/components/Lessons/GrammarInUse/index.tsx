import { Card } from "@/components/Cards/Card";
import Image, { StaticImageData } from "next/image";

interface Example {
  exampleText: string;
  example: string;
}

interface SubSection {
  imgSrc?: StaticImageData;
  imgAlt?: string;
  imgWidth?: string;
  text?: string;
  subSection?: string;
  examples: Example[];
}

interface Lesson {
  bgColor: string;
  textColor: string;
  section: string;
  subSections: SubSection[];
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
            {/* section */}
            <Card bgColor={lesson.bgColor} textColor={lesson.textColor}>
              <p className="bold">{lesson.section}</p>
            </Card>

            {/* subSections */}
            {lesson.subSections.map((subSection, subSectionIndex) => (
              <div key={subSectionIndex} className="line-break">
                {/* imgSrc imgAlt */}
                {subSection.imgSrc &&
                  subSection.imgAlt &&
                  subSection.imgWidth && (
                    <Image
                      src={subSection.imgSrc}
                      alt={subSection.imgAlt}
                      className="img-border"
                      style={{ width: subSection.imgWidth, margin: "auto" }}
                    />
                  )}

                {/* subSection */}
                {subSection.text && <p className="bold">{subSection.text}</p>}

                {/* section */}
                {subSection.subSection && (
                  <Card bgColor="lightgray" textColor="black">
                    <p className="bold">{subSection.subSection}</p>
                  </Card>
                )}

                {/* example */}
                <div>
                  {subSection.examples.map((example, indexExample) => (
                    <div key={indexExample}>
                      {example.exampleText && (<p
                        dangerouslySetInnerHTML={{
                          __html: example.exampleText
                        }}
                      ></p>)}
                      <p>
                        <span className="bold">•</span>{" "}
                        <span
                          dangerouslySetInnerHTML={{ __html: example.example }}
                        ></span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <Card bgColor="gray">
          <p className="bold">Exercises</p>
        </Card>
      </div>
    </>
  );
};
