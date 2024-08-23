"use client";
import { Listening } from "@/components/Lessons/Listening";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestion } from "@/components/Celta/Introduction";
import { FlipCard } from "@/components/Cards/Flip";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { Paragraph } from "@/components/Celta/Listening/ListeningForGist";
import { ScanQuestion } from "@/components/Celta/Listening/ListeningForScan";
import { ScrollToTop } from "@/components/ScrollToTop";

// Images
import {
  debris1,
  spaceJunk1,
  stage1,
  track1,
  strategy1,
  sustainable1,
  disappoint1,
  occur1,
} from "@/img/index";
import { FollowupQuestion } from "@/components/Celta/Listening/FollowUp";

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "Has Brazil ever launched rockets to the space?",
      },
    ],
  },
];

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrcLink:
      "https://gdb.voanews.com/01000000-0aff-0242-d2d6-08dcbb19ddcb_cx0_cy8_cw0_w1200_r1.jpg",
    imgAltLink: "...",
  },
  {
    imgSrcLink:
      "https://sm.mashable.com/t/mashable_in/photo/default/photo-4_1uxd.1248.png",
    imgAltLink: "...",
  },
];

const flipCards: FlipCard[] = [
  {
    imgSrc: disappoint1,
    imgAlt: "An image of a woman disappointed.",
  },
  {
    imgSrc: occur1,
    imgAlt: "An image of car accident.",
  },
  {
    imgSrc: track1,
    imgAlt: "Tracks of dinosaur.",
  },
  {
    imgSrc: sustainable1,
    imgAlt: "An image of sustainable.",
  },
  {
    imgSrc: debris1,
    imgAlt: "An image of debris scattered across a rough surface",
  },
  {
    imgSrc: stage1,
    imgAlt: "An image of parental stages.",
  },
  {
    imgSrc: strategy1,
    imgAlt: "An image of a chess pawn.",
  },
  {
    imgSrc: spaceJunk1,
    imgAlt: "An image of space junk floating in the darkness of space.",
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/debris.mp3",
      keyword: "debris",
      label: "debris",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/space-junk.mp3",
      keyword: "junk",
      label: "space junk",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/stage.mp3",
      keyword: "stage",
      label: "stage",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/t/track.mp3",
      keyword: "track",
      label: "track",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/strategy.mp3",
      keyword: "strategy",
      label: "strategy",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/sustainable.mp3",
      keyword: "sustainable",
      label: "sustainable",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/disappoint.mp3",
      keyword: "disappoint",
      label: "disappoint",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/occur.mp3",
      keyword: "occur",
      label: "occur",
    },
  },
];

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "114px",
    title: "Now fill in the blank with the correct word.",
    beforeBlank: "I hate to",
    correctAnswer: ["disappoint"],
    afterBlank: "you, but I'm just not interested.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "70px",
    beforeBlank: "When exactly did the incident",
    correctAnswer: ["occur"],
    afterBlank: "?",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "82px",
    beforeBlank: "The beach is criss-crossed with animal",
    correctAnswer: ["tracks"],
    afterBlank: ".",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "128px",
    beforeBlank: "This type of farming is simply not",
    correctAnswer: ["sustainable"],
    afterBlank: "any more.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "79px",
    beforeBlank: "A new version is in the final",
    correctAnswer: ["stages"],
    afterBlank: "of testing.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "73px",
    beforeBlank: "Emergency teams are still clearing the",
    correctAnswer: ["debris"],
    afterBlank: "from the plane crash.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "58px",
    beforeBlank: "I've cleared out all that old",
    correctAnswer: ["junk"],
    afterBlank: "in the attic.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "102px",
    beforeBlank: "We need to devise an effective long-term",
    correctAnswer: ["strategy"],
    afterBlank: ".",
    lineBreakAfter: true,
  },
];

const paragraphs: Paragraph[] = [
  {
    enParagraphs: [
      {
        enParagraph:
          "Experts say a Chinese rocket that recently helped launch 18 satellites broke apart in space and created hundreds of pieces of debris.",
      },
    ],
    ptParagraph:
      "Especialistas dizem que um foguete chinês que recentemente ajudou a lançar 18 satélites se desintegrou no espaço e criou centenas de pedaços de destroços.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Space traffic observation organizations said data showed part of a Chinese rocket came apart soon after making the satellite deployments. State media in China reported the satellites were carried to space aboard a Long March-6 rocket and reached orbit on August 6.",
      },
    ],
    ptParagraph:
      "Organizações de observação do tráfego espacial disseram que os dados mostraram que parte de um foguete chinês se desintegrou logo após a implantação dos satélites. A mídia estatal chinesa relatou que os satélites foram levados ao espaço a bordo de um foguete Longa Marcha-6 e alcançaram a órbita em 6 de agosto.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The satellites are part of a Chinese government-backed effort that seeks to provide high-speed internet services to people around the world. Such satellites operate from between 300 and 2,000 kilometers above Earth. The area is known as low Earth orbit.",
      },
    ],
    ptParagraph:
      "Os satélites fazem parte de um esforço apoiado pelo governo chinês que busca fornecer serviços de internet de alta velocidade para pessoas em todo o mundo. Esses satélites operam a altitudes entre 300 e 2.000 quilômetros acima da Terra, em uma área conhecida como órbita baixa da Terra.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The project is expected to become a competitor to American technology company SpaceX, which offers its own satellite-based internet service. SpaceX has so far deployed about 5,500 satellites for its Starlink service, Reuters news agency reports.",
      },
    ],
    ptParagraph:
      "O projeto deve se tornar um concorrente da empresa americana de tecnologia SpaceX, que oferece seu próprio serviço de internet via satélite. A agência de notícias Reuters informa que a SpaceX já implantou cerca de 5.500 satélites para o seu serviço Starlink.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Several groups that continuously observe satellite and spacecraft traffic said the Chinese rocket stage that broke apart in space created at least 700 pieces of debris. The floating debris is also known as space junk. It can harm active spacecraft, other satellites and even the International Space Station (ISS).",
      },
    ],
    ptParagraph:
      "Vários grupos que monitoram continuamente o tráfego de satélites e espaçonaves disseram que o estágio do foguete chinês que se desintegrou no espaço criou pelo menos 700 pedaços de destroços. Esses destroços flutuantes, também conhecidos como lixo espacial, podem danificar espaçonaves ativas, outros satélites e até mesmo a Estação Espacial Internacional (ISS).",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The group that launched the satellites is state-financed Shanghai Spacecom Satellite Technology. The company did not answer requests from Reuters for comment about the situation.",
      },
    ],
    ptParagraph:
      "O grupo que lançou os satélites é a Shanghai Spacecom Satellite Technology, financiada pelo Estado. A empresa não respondeu aos pedidos de comentário sobre a situação feitos pela Reuters.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Some experts said the high level of debris had placed more than 1,000 satellites and other orbiting objects at risk.",
      },
    ],
    ptParagraph:
      "Alguns especialistas disseram que o elevado nível de destroços colocou em risco mais de 1.000 satélites e outros objetos em órbita.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "U.S. space-tracking company LeoLabs told Reuters it estimates the number of debris pieces created is likely over 900. The collection of debris sitting about 800 kilometers above Earth's surface is expected to last several years, LeoLabs added.",
      },
    ],
    ptParagraph:
      "A empresa americana de rastreamento espacial LeoLabs disse à Reuters que estima que o número de pedaços de destroços criados provavelmente seja superior a 900. A LeoLabs acrescentou que a coleção de destroços, situada a cerca de 800 quilômetros acima da superfície da Terra, deve durar vários anos.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Experts said it was not clear whether the rocket body's breakup was caused by a crash into another object or by an explosion of unused rocket fuel. The U.S. Space Command said early on in the event that at least 300 pieces of debris had been created.",
      },
    ],
    ptParagraph:
      "Especialistas disseram que não estava claro se a desintegração do corpo do foguete foi causada por uma colisão com outro objeto ou por uma explosão de combustível de foguete não utilizado. O Comando Espacial dos EUA afirmou no início do evento que pelo menos 300 pedaços de destroços haviam sido criados.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Audrey Schaffer is the vice president of strategy at space-tracking company Slingshot Aerospace. She told Reuters her team had estimated over 1,100 satellites and other space objects were likely at risk of hitting the Chinese rocket debris.",
      },
    ],
    ptParagraph:
      "Audrey Schaffer é a vice-presidente de estratégia da empresa de rastreamento espacial Slingshot Aerospace. Ela disse à Reuters que sua equipe estimou que mais de 1.100 satélites e outros objetos espaciais estavam provavelmente em risco de colidir com os destroços do foguete chinês.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Schaffer noted, however, that about one-third of at-risk objects are active spacecraft and could probably move out of the way. The rest are believed to be uncontrollable pieces of existing space junk that would have no way of avoiding new debris.",
      },
    ],
    ptParagraph:
      "Schaffer observou, no entanto, que cerca de um terço dos objetos em risco são espaçonaves ativas e provavelmente poderiam se desviar do caminho. O restante é composto por peças incontroláveis de lixo espacial existente, que não teriam como evitar os novos destroços.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "In 2022, a Long March 6A rocket stage similarly broke apart in space and created hundreds of pieces of debris. That event led to criticism of China from Western countries and space sustainability campaigners. The groups have called on China to establish better controls for how it retires used rocket bodies.",
      },
    ],
    ptParagraph:
      "Em 2022, um estágio do foguete Long March 6A também se desintegrou no espaço e criou centenas de pedaços de destroços. Esse evento gerou críticas à China por parte de países ocidentais e defensores da sustentabilidade espacial. Os grupos pediram à China que estabeleça controles mais rigorosos sobre como descarta os corpos de foguetes usados.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          '"It\'s disappointing that the rocket had the same issue again," Schaffer said. She added, "These kinds of debris-generating events that are potentially avoidable should not occur anymore." I’m Bryan Lynn.',
      },
    ],
    ptParagraph:
      '"É decepcionante que o foguete tenha tido o mesmo problema novamente," disse Schaffer. Ela acrescentou: "Eventos desse tipo, que geram destroços e que são potencialmente evitáveis, não deveriam mais ocorrer."',
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "What happened to the Chinese rocket?",
    answer:
      "The Chinese rocket, which was involved in launching 18 satellites, broke apart in space, creating a significant amount of debris.",
  },
  {
    question: "How many pieces of debris were created?",
    answer:
      "The rocket's breakup created at least 700 pieces of debris, with estimates suggesting that the number could be over 900.",
  },
  {
    question: "How many satellites are at risk?",
    answer:
      "Over 1,100 satellites and other space objects are believed to be at risk of colliding with the Chinese rocket debris.",
  },
  {
    question: "What caused the rocket to break apart?",
    answer:
      "It is not clear whether the rocket's breakup was caused by a collision with another object or by an explosion of unused rocket fuel.",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "What can be done to prevent space debris?",
  },
  {
    enQuestion: "How might this issue affect future space missions?",
  },
];

export default function ChineseRocketBreaksUpInSpace() {
  return (
    <>
      <Whiteboard
        title="Skills"
        subtitle="Listening"
        descriptions={[
          "Chinese Rocket Breaks Up in Space, Releasing Hundreds of Debris Pieces",
        ]}
      />
      <div className="line-break">
        <Listening
          swiperFraction={swiperFraction}
          discussionQuestions={discussionQuestions}
          flipCards={flipCards}
          preVocabularies={preVocabularies}
          fillInTheBlanks={fillInTheBlanks}
          audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/08/13/01000000-0aff-0242-f5cb-08dcbba87c1a.mp3"
          paragraphs={paragraphs}
          gistAnswer= "The main issue discussed in the text is the creation of space debris from the breakup of a Chinese rocket. This debris poses a risk to other satellites and space objects, complicates space traffic management, and raises concerns about the sustainability of space operations. The text also highlights the ongoing problem of space debris and the need for better controls and practices to mitigate such issues."
          scanQuestions={scanQuestions}
          followupQuestions={followupQuestions}
        />
      </div>
      <ScrollToTop />
      <div className="line-break"></div>
    </>
  );
}
