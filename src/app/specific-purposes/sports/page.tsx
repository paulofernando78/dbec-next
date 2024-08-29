import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard";
import Image from "next/image";

// Images
import usaIcon from "../../../../public/assets/img/icon/flag/usa.png";
import ukIcon from "../../../../public/assets/img/icon/flag/uk.png";

// import footballIcon from "/assets/img/icon/soccer.png"

export default function Sports() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Sports" />
      <div className="line-break">
        <div>
          <Link href="/specific-purposes/sports/">
            <p>Basketball</p>
          </Link>
          <p>Croquet</p>
          <Link href="/specific-purposes/sports/dodgeball">
            <p>Dodgetball</p>
          </Link>
          <Link href="/specific-purposes/sports/soccer-football">
            <p>
              <Image
                src={usaIcon}
                alt="Soccer icon"
                className="icon-general icon-position-top"
              />{" "}
              Soccer{" "}
              <Image
                src={ukIcon}
                alt="Soccer icon"
                className="icon-general icon-position-top"
              />{" "}
              Football
            </p>
          </Link>
          <Link href="/specific-purposes/sports/">
            <p>Tennis</p>
          </Link>
          <Link href="/specific-purposes/sports/">
            <p>Voleyball</p>
          </Link>
        </div>
      </div>
    </>
  );
}
