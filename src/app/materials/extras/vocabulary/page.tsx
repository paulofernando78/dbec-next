import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import Link from "next/link";

const links = [
  { href: "/extras/vocabulary/which-one", text: "Which one?" },
  { href: "/extras/vocabulary/idioms", text: "Idioms / Expressions" },
  { href: "/extras/vocabulary/collocations", text: "Collocations" },
  { href: "/extras/vocabulary/phrasal-verbs", text: "Phrasal Verbs" },
  { href: "/extras/vocabulary/word-formation", text: "Word Formation" },
  { href: "/extras/vocabulary/false-cognates", text: "False Cognates" },
  { href: "/extras/vocabulary/false-cognates", text: "English -> Portuguese" },
];

export default function Vocabulary() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Vocabulary" />

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <p>{link.text}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p>aggravate</p>
      <p>detest</p>

      <div className="line-break">
        <div>
          <p>Anticipate = prever, ficar na expectativa</p>
          <p>
            "I anticipate that it will rain tomorrow." (Eu prevejo que vai
            chover amanhã.)
          </p>
          <p>
            "We anticipate that sales will increase next quarter." (Nós
            esperamos que as vendas aumentem no próximo trimestre.)
          </p>
        </div>
        <div>
          <p>Para dizer fazer algo antes do tempo podemos dizer:</p>
          <p>
            "Eles decidiram antecipar o lançamento do produto." (They decided to
            <b>move up</b> the product launch.)
          </p>
          <p>
            "Vamos antecipar o pagamento para evitar problemas." (Let's{" "}
            <b>advance</b>
            the payment to avoid issues.)
          </p>
          <p>to bring forward, to move forward </p>
        </div>
        <div>
          <p className="font-bold">Adjectives</p>
          <p>living organisms</p>
          <p>flying saucer</p>
        </div>
      </div>
    </>
  );
}
