import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Songs() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Songs" />
      <div className="line-break">
        <div>
          <p>What's your favorite band?</p>
          <p>What's your favorite singer / artist?</p>
        </div>
        <p>
          <b>Artists</b>
        </p>
        <div>
          <p>Nirvana</p>
          <Link href="/specific-purposes/songs/nirvana">
            <p>Pearl Jam</p>
          </Link>
          <Link href="/specific-purposes/songs/red-hot-chili-peppers">
            <p>Red Hot Chili Peppers</p>
          </Link>
          <Link href="/specific-purposes/songs/soundgarden">
          <p>Soundgarden</p>
          </Link>
          <Link href="/specific-purposes/songs/taylor-swift">
            <p>Taylor Swift</p>
          </Link>
        </div>
      </div>
    </>
  );
}
