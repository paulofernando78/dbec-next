import { Card } from "@/components/Card/Card";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";


export default function Pronunciation() {
  return (
    <>
      <Whiteboard
      title="Extras"
      subtitle="Pronunciation"
      />
      <div className="line-break">
        <Card>
          <p><b>Linked sound examples</b></p>
        </Card>
        <p><b>consonant + vowel</b></p>
        <div>
          <p>I wor<span className="underline">k in an o</span>ffice.</p>
          <p>Embar<span className="underline">k on an e</span>xtraordinary journey...</p>
        </div>
      </div>
    </>
  )
}
