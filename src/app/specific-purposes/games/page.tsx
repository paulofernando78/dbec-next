import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";

export default function Games() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Games" />
      <div className="line-break">
      <div className="line-break">
          <Card>
            <b>SIERRA</b>
          </Card>
          <div>
            <Link href="/specific-purposes/games/">
            <p>Larry I</p>
            </Link>
          </div>
          <div>
            <Link href="/specific-purposes/games/">
            <p>Police Quest I</p>
            </Link>
          </div>
          <div>
            <Link href="/specific-purposes/games/">
            <p>Space Quest I</p>
            </Link>
          </div>
          <div>
            <Link href="/specific-purposes/games/">
            <p>Quest for Glory I</p>
            </Link>
          </div>
          <div>
            <Link href="/specific-purposes/games/kings-quest-1">
              <p>King's Quest I: Quest for the Crown (1984)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-2">
              <p>King's Quest II: Romancing the Throne (1985)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-3">
              <p>King's Quest III: To Heir is Human (1986)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-4">
              <p>King's Quest VI: The Perils of Rosella (1988)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-5">
              <p>King's Quest V: Absence Makes the Heart Go Yonder! (1990)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-6">
              <p>King's Quest VI: Heir Today, Gone Tomorrow (1992)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-7">
              <p>King's Quest VII: The Princeless Bride (1994)</p>
            </Link>
            <Link href="/specific-purposes/games/kings-quest-8">
              <p>King's Quest VIII: Mask of Eternity (1998)</p>
            </Link>
          </div>
        </div>
        <div className="line-break">
          <Card>
            <b>LucasArts</b>
          </Card>
          <div>
            <Link href="/specific-purposes/games/maniac-mansion">
              <p>Maniac Mansion (1987)</p>
            </Link>
            <Link href="/specific-purposes/games/indiana-jones-and-the-last-crusade">
              <p>Indiana Jones and the Last Crusade (1989)</p>
            </Link>
            <Link href="/specific-purposes/games/the-monkey-island">
              <p>The Monkey Island (1990)</p>
            </Link>
            <Link href="/specific-purposes/games/indiana-jones-and-the-fate-of-atlantis">
              <p>Indiana Jones and the Fate of Atlantis (1992)</p>
            </Link>
            <Link href="/specific-purposes/games/the-dig">
              <p>Sam and Max: Hit the Road (1993)</p>
            </Link>
            <Link href="/specific-purposes/games/days-of-the-tentacles">
              <p>Days of the Tentacles (1993)</p>
            </Link>
            <Link href="/specific-purposes/games/the-dig">
              <p>The Dig (1995)</p>
            </Link>
            <Link href="/specific-purposes/games/the-dig">
              <p>Full Throttle (1995)</p>
            </Link>
          </div>
          <div>
            <Card>Misc</Card>
          </div>
          <Link href="/specific-purposes/games/minecraft">
              <p>Minecraft (2011)</p>
            </Link>
        </div>
      </div>
    </>
  );
}
