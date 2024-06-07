import { ArticleData, Articles } from "@/components/Articles";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

import { labEmbryo, labEmbryo2, labEmbryo3, labScientist } from "@/img/index";

const articles: ArticleData[] = [
  {
    beforeImgSrc: labEmbryo,
    beforeImgSrcWidth: "350px",
    beforeImgSrcHeight: "200px",
    beforeAltName: "Microscope",
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/i/Israeli.mp3",
          label: "Israeli",
        },
        enParagraph:
          "scientists say they have created a model of a human embryo from stem cells in a laboratory.",
      },
    ],
    ptParagraph:
      "Cientistas israelenses dizem que criaram um modelo de embrião humano a partir de células-tronco em laboratório.",
    ///   afterImgSrc: ...,
    //   afterImgSrcWidth: "350px",
    //   afterImgSrcHeight: "200px",
    //   afterAltName: "...",
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "The embryo model – created without using sperm, eggs or a uterus – is designed to support research on early human development.",
      },
    ],
    ptParagraph:
      "O modelo de embrião – criado sem o uso de esperma, óvulos ou útero – foi desenvolvido para apoiar pesquisas sobre o desenvolvimento humano inicial.",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph:
          "Only stem cells were used in the process. Stem cells are simple cells in the body that can develop into one of many specialized cells. Researchers say the embryo models cannot grow into babies. But they are complete enough to provide information about what happens in the embryo during a pregnancy.",
      },
    ],
    ptParagraph:
      "Foram utilizadas apenas células-tronco no processo. Células-tronco são células simples no corpo que podem se desenvolver em uma das muitas células especializadas. Os pesquisadores dizem que os modelos de embriões não podem se desenvolver em bebês, mas são suficientemente completos para fornecer informações sobre o que acontece no embrião durante uma gravidez.",
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph:
          "The use of embryo models permits scientists to carry out research without the ethical concerns linked to experiments using real embryos.",
      },
    ],
    ptParagraph:
      "O uso de modelos de embriões permite que os cientistas realizem pesquisas sem as preocupações éticas associadas a experimentos com embriões reais.",
  },
  {
    paragraphNumber: "Paragraph 5",
    beforeImgSrc: labEmbryo2,
    beforeImgSrcWidth: "350px",
    beforeImgSrcHeight: "250px",
    beforeAltName: "Man looking through a microscope",
    enParagraphs: [
      {
        enParagraph:
          "Several international research teams have been working separately on studies involving human embryo models. Scientists from the United States, Britain and China published their research results on the subject in recent months.",
      },
    ],
    ptParagraph:
      "Várias equipes de pesquisa internacionais têm trabalhado separadamente em estudos envolvendo modelos de embriões humanos. Cientistas dos Estados Unidos, da Grã-Bretanha e da China publicaram os resultados de suas pesquisas sobre o assunto nos últimos meses.",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph:
          "The Israeli researchers say their embryo model looks similar to a real human embryo at day 14. At this point, the embryo model has begun building inner structures. But it has not yet developed enough to start forming body organs, the team said.",
      },
    ],
    ptParagraph:
      "Os pesquisadores israelenses dizem que seu modelo de embrião se assemelha a um embrião humano real no 14º dia. Neste ponto, o modelo de embrião começou a construir estruturas internas, mas ainda não se desenvolveu o suficiente para começar a formar órgãos do corpo, afirmou a equipe.",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph:
          "The scientists recently reported their results in a study in the publication Nature. They also shared their research with scientists during a June meeting of the International Society for Stem Cell Research in Boston, Massachusetts.",
      },
    ],
    ptParagraph:
      'Os cientistas relataram recentemente seus resultados em um estudo publicado na revista Nature. Eles também compartilharam sua pesquisa com outros cientistas durante uma reunião em junho da "International Society for Stem Cell Research, em Boston, Massachusetts".',
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph:
          "The Israeli team noted that their current research is still a long way from being able to create a full embryo in the lab.",
      },
    ],
    ptParagraph:
      "A equipe israelense observou que sua pesquisa atual ainda está longe de ser capaz de criar um embrião completo em laboratório.",
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph:
          'Jacob Hanna was the team leader on the research. He told the Reuters news agency, "The question is, when does an embryo model become considered an embryo? When that happens, we know the regulations. At the moment we are really, really far off from that point."',
      },
    ],
    ptParagraph:
      'Jacob Hanna foi o líder da equipe na pesquisa. Ele disse à agência de notícias Reuters: "A questão é, quando um modelo de embrião passa a ser considerado um embrião? Quando isso acontecer, saberemos as regulamentações. No momento, estamos realmente, realmente longe desse ponto."',
  },
  {
    paragraphNumber: "Paragraph 10",
    beforeImgSrc: labEmbryo3,
    beforeImgSrcWidth: "350px",
    beforeImgSrcHeight: "250px",
    beforeAltName: "Man looking through a microscope",
    enParagraphs: [
      {
        enParagraph:
          "But the researchers said the work could open the door to new ways to study early human development. For example, the embryo models could test the effect of drugs on pregnancies. They could also help scientists better understand miscarriages and genetic diseases. And they might one day be used to grow transplant tissues and organs.",
      },
    ],
    ptParagraph:
      "Mas os pesquisadores disseram que o trabalho poderia abrir portas para novas formas de estudar o desenvolvimento humano inicial. Por exemplo, os modelos de embrião poderiam testar o efeito de medicamentos nas gestações. Eles também poderiam ajudar os cientistas a entender melhor abortos espontâneos e doenças genéticas. Eles também podem um dia ser usados para cultivar tecidos e órgãos para transplantes.",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph:
          'Hanna noted that the models are not exactly like human embryos. "There are differences from human embryos, but still, this is the first time, if you open an atlas or a textbook, you can say - yeah I can really see the similarity between them," he said.',
      },
    ],
    ptParagraph:
      'Hanna observou que os modelos não são exatamente como embriões humanos. "Existem diferenças dos embriões humanos, mas ainda assim, esta é a primeira vez, se você abrir um atlas ou um livro didático, você pode dizer - sim, consigo realmente ver a semelhança entre eles", disse ele.',
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph:
          "Hanna said his team took stem cells produced from adult human skin cells, as well as others, and let them develop in the lab. The researchers then reverted the cells to an early state, with the possibility that they could develop into different kinds of cells.",
      },
    ],
    ptParagraph:
      "Hanna disse que sua equipe pegou células-tronco produzidas a partir de células da pele de adultos humanos, bem como outras, e as deixaram se desenvolver no laboratório. Os pesquisadores então revertiam as células para um estágio inicial, com a possibilidade de que elas pudessem se desenvolver em diferentes tipos de células.",
  },
  {
    paragraphNumber: "Paragraph 13",
    beforeImgSrc: labScientist,
    beforeImgSrcWidth: "350px",
    beforeImgSrcHeight: "250px",
    beforeAltName: "Scientist looking at models of early-stage human embryos",
    enParagraphs: [
      {
        enParagraph:
          "The team then genetically changed the cells in an effort to get them to start developing into something that looks and behaves like a real human embryo. However, the researchers said their creation is not an actual or synthetic embryo. Instead, it is considered a model that shows how a real embryo works.",
      },
    ],
    ptParagraph:
      "A equipe então modificou geneticamente as células na tentativa de fazê-las começar a se desenvolver em algo que se parece e se comporta como um embrião humano real. No entanto, os pesquisadores afirmaram que sua criação não é um embrião real ou sintético. Em vez disso, é considerado um modelo que mostra como um embrião real funciona.",
  },
  {
    paragraphNumber: "Paragraph 14",
    enParagraphs: [
      {
        enParagraph:
          'Hanna said the process was able to start effective structure development. But he added that "the farthest we could get is day 14 in human embryo development."',
      },
    ],
    ptParagraph:
      'Hanna disse que o processo foi capaz de iniciar o desenvolvimento eficaz de estruturas. Mas ele acrescentou que "o máximo que conseguimos foi chegar ao dia 14 do desenvolvimento do embrião humano".',
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph:
          "Hanna said the team’s next goal will be to extend model development to 21 days and also reach a success rate of at least 50 percent.",
      },
    ],
    ptParagraph:
      "Hanna disse que o próximo objetivo da equipe será estender o desenvolvimento do modelo para 21 dias e também alcançar uma taxa de sucesso de pelo menos 50 por cento.",
  },
  {
    enParagraphs: [
      {
        enParagraph: "I’m Bryan Lynn.",
      },
    ],
  },
];

export default function IsraeliScientistsAnnounceCreationOfEmbryoModelInLab() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={[
          "Articles",
          "Israeli Scientists Announce Creation of Embryo Model in Lab",
          "(September 11, 2023)",
        ]}
      />
      <div>
        <Articles
          articles={articles}
          discussion="What ethical issues could arise from using embryonic cells?"
          discussionAnswer="The main issues that raise ethical dilemmas following the development of assisted reproduction techniques are: the right to procreate or reproduce; the process of in vitro fertilization itself — is it morally acceptable to interfere in the reproduction process?; the moral status of the embryo; the involvement of a third party in the reproductive process by genetic material donation; the practice of surrogacy; cryopreservation of pre-embryos; genetic manipulation; experiments on pre-embryos, etc."
          audioSrc="/assets/audio/extras/listening/articles/science-and-technology/Israeli-scientists-announce-creation-of-embryo-model-in-lab/audio.mp3"
        />
      </div>
    </>
  );
}
