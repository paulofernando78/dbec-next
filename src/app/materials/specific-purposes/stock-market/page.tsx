import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";

export default function StockMarket() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Stock Market" />
      <div className="line-break">
        <Link href="/specific-purposes/stock-market/vocabulary">
          <p>
            <b>Vocabulary</b>
          </p>
        </Link>
      </div>
    </>
  );
}
