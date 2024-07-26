import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import {
  DiscussionQuestion,
  PreVocabulary,
  GistQuestion,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import SwiperFraction from "@/components/Swiper/Fraction";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";

import { cat1, labEmbryo, labEmbryo2, labEmbryo3, labScientist } from "@/img/index";
import { FlipCard } from "@/components/Cards/Flip";

const swiperFraction = [
  {
    imgSrc: labEmbryo,
    imgAlt:
      "PhD student, Nir Livnat, works at the laboratory on models of an early-stage human embryo, in a laboratory at the Weizmann Institute of Science in Rehovot, Israel September 7, 2023.",
  },
  {
    imgSrc: labEmbryo2,
    imgAlt:
      "PhD student, Nir Livnat, works at the laboratory on models of an early-stage human embryo, in a laboratory at the Weizmann Institute of Science in Rehovot, Israel September 7, 2023.",
  },
  {
    imgSrc: labEmbryo3,
    imgAlt:
      "PhD student, Mehmet Yunus Comar, looks at a model of an early-stage human embryo, in a laboratory at the Weizmann Institute of Science in Rehovot, Israel September 7, 2023.",
  },
  {
    imgSrc: labScientist,
    imgAlt:
      "Prof Josef Hanna demonstrates the process he and his team of scientists used to develop models of early-stage human embryos, in a laboratory at the Weizmann Institute of Science in Rehovot, Israel September 7, 2023. ",
  },
];

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "1.",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "",
          label: "...",
        },
        question: "...",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "",
          label: "...",
        },
        question: "...",
      },
    ],
  },
  {
    questions: [
      {
        question: "2. ...",
      },
    ],
  },
];

const flipCards: FlipCard[] = [
  {
    frontText: "What's the past of ask?",
    imgSrc: cat1,
    imgAlt: "...", 
    backText: "asked"
  }
]

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/carry-out.mp3",
      keyword: "carry",
      label: "carry out",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/e/ethical.mp3",
      label: "ethical",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/m/miscarriage.mp3",
      label: "miscarriage",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/p/pregnancy.mp3",
      label: "pregnancy",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/synthetic.mp3",
      label: "synthetic",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/stem-cell.mp3",
      label: "stem cell",
    },
  },
];

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "1. ...",
    correctAnswer: ["..."],
    afterBlank: "...",
    lineBreakAfter: true,
  },
];

const gistQuestions: GistQuestion[] = [
  {
    question: "...",
    answer: "...",
  },
];

const paragraphs: Paragraph[] = [
  {
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
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "The embryo model – created without using sperm, eggs or a",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/u/uterus.mp3",
          label: "uterus",
        },
        enParagraph:
          "– is designed to support research on early human development.",
      },
    ],
    ptParagraph:
      "O modelo de embrião – criado sem o uso de esperma, óvulos ou útero – foi desenvolvido para apoiar pesquisas sobre o desenvolvimento humano inicial.",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph: "Only",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/s/stem-cell.mp3",
          label: "stem cell",
        },
        enParagraph:
          "were used in the process. Stem cells are simple cells in the body that can develop into one of many",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/s/specialized.mp3",
          label: "specialized",
        },
        enParagraph:
          "cells. Researchers say the embryo models cannot grow into babies. But they are complete enough to provide information about what happens in the embryo during a pregnancy.",
      },
    ],
    ptParagraph:
      "Foram utilizadas apenas células-tronco no processo. Células-tronco são células simples no corpo que podem se desenvolver em uma das muitas células especializadas. Os pesquisadores dizem que os modelos de embriões não podem se desenvolver em bebês, mas são suficientemente completos para fornecer informações sobre o que acontece no embrião durante uma gravidez.",
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph: "The use of embryo models permits scientists to",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/c/carry-out.mp3",
          keyword: "carry",
          label: "carry out",
        },
        enParagraph:
          "research without the ethical concerns linked to experiments using real embryos.",
      },
    ],
    ptParagraph:
      "O uso de modelos de embriões permite que os cientistas realizem pesquisas sem as preocupações éticas associadas a experimentos com embriões reais.",
  },
  {
    paragraphNumber: "Paragraph 5",

    enParagraphs: [
      {
        enParagraph:
          "Several international research teams have been working separately on studies involving human embryo models. Scientists from the United States, Britain and China",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/p/published.mp3",
          keyword: "publish",
          label: "published",
        },
        enParagraph: "their research results on the subject in recent months.",
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
          "Hanna said the team's next goal will be to extend model development to 21 days and also reach a success rate of at least 50 percent.",
      },
    ],
    ptParagraph:
      "Hanna disse que o próximo objetivo da equipe será estender o desenvolvimento do modelo para 21 dias e também alcançar uma taxa de sucesso de pelo menos 50 por cento.",
  },
  {
    enParagraphs: [
      {
        enParagraph: "I'm Bryan Lynn.",
      },
    ],
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "What institute conducted the research?",
    answer: "",
  },
  {
    question:
      "What date is mentioned in relation to the stage of the embryo model?",
    answer: "",
  },
  {
    question: "Who led the research team?",
    answer: "",
  },
  {
    question:
      "What is one potential use of the embryo models mentioned in the article?",
    answer: "",
  },
  {
    question: "How far did the embryo model develop?",
    answer: "",
  },
  {
    question: "What is the team's next goal?",
    answer: "",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion:
      "What are your thoughts on using stem cells to create embryo models?",
    ptQuestion: "",
  },
  {
    enQuestion:
      "Do you think the benefits of this research outweigh the ethical concerns? Why or why not?",
    ptQuestion: "",
  },
  {
    enQuestion:
      "How do you think this research could impact future medical treatments?",
    ptQuestion: "",
  },
  {
    enQuestion:
      "Why do some opponents of stem cell research consider it unethical and immoral?",
    ptQuestion: "",
  },
];

// const radioExercises = [
//   {
//     title: "1. Choose the correct answer.",
//     question: "1. What did Israeli scientists create in a laboratory?",
//     options: [
//       {
//         label: "a) A model of a human embryo from stem cells.",
//         isCorrect: true,
//       },
//       {
//         label: "b) A full human embryo using eggs and sperm.",
//         isCorrect: false,
//       },
//       { label: "c) A synthetic organ from adult cells.", isCorrect: false },
//     ],
//   },
//   {
//     question:
//       "2. What is the main purpose of the embryo model created by Israeli scientists?",
//     options: [
//       { label: "a) To grow into a full human baby.", isCorrect: false },
//       {
//         label: "b) To support research on early human development.",
//         isCorrect: true,
//       },
//       { label: "c) To develop new types of stem cells.", isCorrect: false },
//     ],
//   },
//   {
//     question:
//       "3. At what stage does the embryo model created by the Israeli researchers resemble a real human embryo?",
//     options: [
//       { label: "a) At day 7.", isCorrect: false },
//       { label: "b) At day 14.", isCorrect: true },
//       { label: "c) At day 21.", isCorrect: false },
//     ],
//   },
//   {
//     question:
//       "4. What is one potential application of these embryo models mentioned by the researchers?",
//     options: [
//       {
//         label: "a) To test the effect of drugs on pregnancies.",
//         isCorrect: true,
//       },
//       {
//         label: "b) To create fully functional synthetic humans.",
//         isCorrect: false,
//       },
//       {
//         label: "c) To replace the need for organ donations.",
//         isCorrect: false,
//       },
//     ],
//   },
//   {
//     question:
//       "5. What was the maximum development stage reached by the embryo model in the study?",
//     options: [
//       { label: "a) Day 7.", isCorrect: false },
//       { label: "b) Day 14.", isCorrect: true },
//       { label: "c) Day 21.", isCorrect: false },
//     ],
//   },
// ];

export default function IsraeliScientistsAnnounceCreationOfEmbryoModelInLab() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={[
          "Articles",
          "Israeli Scientists Announce Creation of Embryo Model in Lab",
        ]}
        subdescription="September 11, 2023"
      />
      <div className="line-break">
        <SwiperFraction images={swiperFraction} />
        <div>
          <Listening
            discussion="Check out the pictures above. Swipe them to the right and answer the questions."
            discussionQuestions={discussionQuestions}
            flipCards={flipCards}
            preVocabularies={preVocabularies}
            fillInTheBlanks={fillInTheBlanks}
            gistQuestions={gistQuestions}
            audioSrc="..."
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        {/* <Radio questions={radioExercises} /> */}
        <p>
          To some opponents of stem cell research, the destruction of an embryo
          means that a potential fetus and ultimately a potential human being
          were killed; therefore this act and the research effort behind it is
          unethical and immoral. The basic argument is that an embryo is a
          potential fetus and is an innocent human being."
        </p>
      </div>
    </>
  );
}
