import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Law() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Law" />
      <div className="line-break">
        <Link href="https://dictionary.law.com/"><p>Legal Dictionary</p></Link>
        <hr />
        <p><b>Vocabulary</b></p>
        <div>
          <p>Agribusiness <span className="portuguese">agronegócio</span></p>
        </div>
      </div>
    </>
  );
}
