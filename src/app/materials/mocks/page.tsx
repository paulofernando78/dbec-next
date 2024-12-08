import Link from "next/link";

import { Whiteboard } from "@/components";

export default function Mocks() {
  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <div className="line-break">
          {/* Create lesson*/}
          <p className="bold">Create lessons:</p>
          <div className="line-break">
            <div>
              <Link href="\materials\mocks\LessonData\">
                <p>Lesson Data (General)</p>
              </Link>
              <Link href="\materials\mocks\vocabulary-grammar\">
                <p>Vocabulary / Grammar</p>
              </Link>
              <Link href="\materials\mocks\listening\">
                <p>Listening</p>
              </Link>
              <Link href="\materials\mocks\audiobooks\">
                <p>Audiobooks</p>
              </Link>
              <Link href="\materials\mocks\grammar\">
                <p>Grammar</p>
              </Link>
            </div>
            <div>
              <Link href="\materials\mocks\sbelaa\">
                <p>Speak Business English like an American</p>
              </Link>
            </div>
          </div>

          {/* Componets */}
          <div>
            <p className="bold">Components</p>
            <Link href="/materials/mocks/ContentCard">
              <p>ContentCard</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
