import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Medicine() {
  return (
    <div>
        <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        />
        <div className="line-break">
            <p><b>Vocabulary</b></p>
            <div>
              <p>embryoscope</p>
              <p>hemophilia</p>
              <p>hemoglobin</p>
              <p>Polycystic Ovary Syndrome (PCOS)</p>
              <p>sickle cell disease</p>
            </div>
            <Link href="/specific-purposes/medicine/articles"><p><b>Articles</b></p></Link>
            <p></p>
        </div>
    </div>
  )
}
