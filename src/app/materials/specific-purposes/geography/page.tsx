import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import Image from "next/image";

export default function Geography() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Geography" />
      <div className="line-break">
        {/* <p><b>Vocabulary</b></p> */}
        <div>
          <p>
            A compass is a navigational instrument that has several key
            components, each playing an essential role in its function:
          </p>
          <p className="portuguese">
            Uma bússola é um instrumento de navegação que possui vários
            componentes-chave, cada um desempenhando um papel essencial em sua
            função:
          </p>
        </div>
        <div>
          <p>
            A compass rose is a symbol on a map that shows the cardinal
            directions. The cardinal directions are the main compass
            points—north, south, east, and west. Some more elaborate compass
            roses show additional directions.
          </p>
          <p className="portuguese">
            Uma rosa dos ventos é um símbolo em um mapa que mostra as direções
            cardeais. As direções cardeais são os principais pontos da bússola —
            norte, sul, leste e oeste. Algumas rosas dos ventos mais elaboradas
            mostram direções adicionais.
          </p>
        </div>
        <Image
          src="/assets/img/compass-rose.png"
          alt="Compass rose"
          width={1000}
          height={1000}
          className="img-border"
          style={{ width: "300px", height: "300px" }}
        />
        <div className="flex-col-8px">
          <p>
            The cardinal directions are the four main points of a compass that
            are used to indicate direction. They are:
          </p>
          <p className="portuguese">
            As direções cardeais são os quatro pontos principais de uma bússola
            que são usados para indicar a direção. Elas são:
          </p>
          <DictionaryCard audioSrc="" word="north (N)" />
          <DictionaryCard audioSrc="" word="east (E)" />
          <DictionaryCard audioSrc="" word="south (S)" />
          <DictionaryCard audioSrc="" word="west (W)" />
        </div>
        <div className="flex-col-8px">
          <p>
            In addition to the four cardinal directions, there are intermediate
            directions that provide more precise navigation. These include:
          </p>
          <p className="portuguese">
            Além das quatro direções cardeais, existem direções intermediárias
            que fornecem uma navegação mais precisa. Elas incluem:
          </p>
          <DictionaryCard audioSrc="" word="northeast (NE)" />
          <DictionaryCard audioSrc="" word="southeast (SE)" />
          <DictionaryCard audioSrc="" word="southwest (SW)" />
          <DictionaryCard audioSrc="" word="northwest (NW)" />
        </div>
      </div>
    </>
  );
}
