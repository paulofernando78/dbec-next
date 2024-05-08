import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Games() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Games" />
      <div className="line-break">
        <div className="line-break">
          <p>
            <b>LucasArts</b>
          </p>
          <div>
            <Link href="/specific-purposes/maniac-mansion">
              <p>Maniac Mansion (1987)</p>
            </Link>
            <Link href="/specific-purposes/days-of-the-tentacles">
              <p>Days of the Tentacles (1993)</p>
            </Link>
            <Link href="/specific-purposes/indiana-jones-and-the-last-crusade">
              <p>Indiana Jones and the Last Crusade (1992)</p>
            </Link>
            <Link href="/specific-purposes/indiana-jones-and-the-fate-of-atlantis">
              <p>Indiana Jones and the Fate of Atlantis (1992)</p>
            </Link>
            <Link href="/specific-purposes/the-monkey-island">
              <p>The Monkey Island</p>
            </Link>
            <Link href="/specific-purposes/the-dig">
              <p>The Dig</p>
            </Link>
          </div>
        </div>
        <div className="line-break">
          <p>
            <b>SIERRA</b>
          </p>
          <div>
            <Link href="/specific-purposes/kings-quest-1">
              <p>King's Quest I (1984)</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-2">
              <p>King's Quest II</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-3">
              <p>King's Quest III</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-4">
              <p>King's Quest VI</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-5">
              <p>King's Quest V</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-6">
              <p>King's Quest VI</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-7">
              <p>King's Quest VII</p>
            </Link>
            <Link href="/specific-purposes/kings-quest-1">
              <p>King's Quest VIII</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
