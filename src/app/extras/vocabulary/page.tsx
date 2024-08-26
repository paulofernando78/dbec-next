import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";

export default function Vocabulary() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Vocabulary" />
      <div className="line-break">
          <p>aggravate</p>
          <p>detest</p>
          <div>
            <Link href="/extras/vocabulary/which-one">
            <p>Which one?</p>
            </Link>
            <Link href="/extras/vocabulary/false-cognates">
              <p>False Cognates</p>
            </Link>
          </div>
        <div>
          <p>salary vs. wage</p>
          <p>remember vs. remind</p>
          <p>pretend vs. intend</p>
          </div>
          <div className="line-break">
            <div>
              <p>Anticipate = prever, ficar na expectativa</p>
              <p>
                "I anticipate that it will rain tomorrow." (Eu prevejo que vai chover
                amanhã.)
              </p>
              <p>
                "We anticipate that sales will increase next quarter." (Nós esperamos
                que as vendas aumentem no próximo trimestre.)
              </p>
            </div>
           <div>
              <p>Para dizer fazer algo antes do tempo podemos dizer:</p>
              <p>
                "Eles decidiram antecipar o lançamento do produto." (They decided to
                <b>move up</b> the product launch.)
              </p>
              <p>
                "Vamos antecipar o pagamento para evitar problemas." (Let's <b>advance</b>
                the payment to avoid issues.)
              </p>
              <p>to bring forward, to move forward </p>
           </div>
           <div>
            <p className="bold">Adjectives</p>
             <p>living organisms</p>
             <p>flying saucer</p>
           </div>
        </div>
      </div>
    </>
  );
}
