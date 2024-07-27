"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import SwiperFraction from "@/components/Swiper/Fraction";
import {
  DiscussionQuestion,
  PreVocabulary,
  GistQuestion,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { FlipCard } from "@/components/Cards/Flip";
import {
  noInternetConnection1,
  noInternetConnection2,
  noInternetConnection3,
  noInternetConnection4,
  computerScreenGlitch1,
  remoteHouse1,
  noWifi,
  customer1,
  disrupt1,
  update1,
  fauxpas1,
} from "@/img/index";
import { ScrollToTop } from "@/components/ScrollToTop";

const swiperFraction = [
  {
    imgSrc: noInternetConnection1,
    imgAlt: "Ethernet cable disconnected",
  },
  {
    imgSrc: noInternetConnection2,
    imgAlt: "A bussines man and a computer without connection",
  },
  {
    imgSrc: noInternetConnection3,
    imgAlt: "A technician at the airport fixing connection",
  },
  {
    imgSrc: noInternetConnection4,
    imgAlt: "A person without phone connection",
  },
];

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "1. Have you ever",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/e/experienced.mp3",
          label: "experienced",
        },
      },
      {
        question: "a",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/s/significant.mp3",
          label: "sig<span class='underline'>ni</span>ficant",
        },
        question:
          "computer or technology issue at work or in your daily life? What happened?",
      },
    ],
  },
  {
    questions: [
      {
        question: "2. How do you think a",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/m/major.mp3",
          label: "major",
        },
      },
      {
        question: "technology",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/f/failure.mp3",
          label: "failure",
        },
        question: "could affect a business? ",
      },
    ],
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/customer.mp3",
      keyword: "customer",
      label: "customer",
      phonetics: "/ˈkʌs.tə.mɚ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/disrupted.mp3",
      keyword: "disrupt",
      label: "disrupted",
      phonetics: "/dɪsˈrʌptɪd/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/f/faux-pas.mp3",
      keyword: "faux pas",
      label: "faux pas",
      phonetics: "/ˌfoʊ ˈpɑː/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/g/glitches.mp3",
      keyword: "glitch",
      label: "glitches",
      phonetics: "/ɡlɪtʃɪz/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/outage.mp3",
      keyword: "outage",
      label: "outage",
      phonetics: "/ˈaʊ.t̬ɪdʒ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/r/remote.mp3",
      keyword: "remote",
      label: "remote",
      phonetics: "/rɪˈmoʊt/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/u/update.mp3",
      keyword: "update",
      label: "update",
      phonetics: "/ʌpˈdeɪt/",
    },
  },
];

const flipCards: FlipCard[] = [
  {
    imgSrc: computerScreenGlitch1,
    imgAlt: "...",
  },
  {
    imgSrc: remoteHouse1,
    imgAlt: "...",
  },
  {
    imgSrc: noWifi,
    imgAlt: "...",
  },
  {
    imgSrc: customer1,
    imgAlt: "...",
  },
  {
    imgSrc: update1,
    imgAlt: "...",
  },
  {
    imgSrc: disrupt1,
    imgAlt: "...",
  },
  {
    imgSrc: fauxpas1,
    imgAlt: "...",
  },
];

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "1. A few technical",
    correctAnswer: ["glitches"],
    afterBlank: "forced us to postpone the demonstration",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "2. I committed / made a .",
    correctAnswer: ["faux pas"],
    afterBlank: "that my friends have never let me forget",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "3. The baby was born during a power",
    correctAnswer: ["outage"],
    afterBlank: ".",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "4. It's about time we",
    correctAnswer: ["update"],
    afterBlank: "our software.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "5. The firm has excellent",
    correctAnswer: ["customer "],
    afterBlank: "relations.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "6. Bus services will be",
    correctAnswer: ["disrupted"],
    afterBlank: "tomorrow because of the bridge closure",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "7. The farmhouse is",
    correctAnswer: ["remote"],
    afterBlank: "from any other buildings.",
    lineBreakAfter: true,
  },
];

const gistQuestions: GistQuestion[] = [
  {
    question: "What is the main issue discussed in this lesson?",
    answer:
      "The main issue discussed in this lesson is a global computer system outage caused by a faulty software update from CrowdStrike, affecting various businesses worldwide.",
  },
];

const paragraphs: Paragraph[] = [
  {
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        enParagraph:
          "A major computer system outage affected a wide range of businesses around the world beginning late last week. But the cause of the outage was quickly identified and fixes were deployed to bring most businesses back online.",
      },
    ],
    ptParagraph:
      "Uma grande falha em um sistema de computadores afetou / impactou várias empresas globalmente no final da semana passada. No entanto, a causa foi rapidamente identificada e correções foram aplicadas para restaurar o funcionamento da maioria das empresas.",
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "The problems were linked to a software update provided by cybersecurity company CrowdStrike. The outage affected computers using Microsoft’s Windows operating system. The incident caused major flight delays and cancellations. It also affected banking, health care, media and other businesses.",
      },
    ],
    ptParagraph:
      "Os problemas foram relacionados a uma atualização de software fornecida pela empresa de cibersegurança CrowdStrike. A interrupção afetou computadores que utilizam o sistema operacional Windows da Microsoft. O incidente causou grandes atrasos e cancelamentos de voos. Também afetou bancos, saúde, mídia e outras empresas.",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph:
          'Computers affected by the outage showed what is known in the technology industry as the "blue screen of death." This warning tool is designed to inform Windows users that there is a problem and to block further activity to prevent wider system damage.',
      },
    ],
    ptParagraph:
      'Os computadores afetados pela interrupção mostraram o que é conhecido na indústria de tecnologia como a "tela azul da morte". Essa ferramenta de aviso é projetada para informar os usuários do Windows sobre um problema e bloquear atividades adicionais para prevenir danos maiores ao sistema.',
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph:
          "Officials at Texas-based CrowdStrike were quick to admit a software update containing a programming mistake was sent to customers and caused the outage. Once the problem was identified and a fix deployed, CrowdStrike said it centered on assisting customers to get systems back up as soon as possible.",
      },
    ],
    ptParagraph:
      "Os funcionários da CrowdStrike, sediada no Texas, rapidamente admitiram que uma atualização de software contendo um erro de programação foi enviada aos clientes e causou a interrupção. Assim que o problema foi identificado e uma correção aplicada, a CrowdStrike afirmou que se concentrou em ajudar os clientes a restabelecerem seus sistemas o mais rápido possível.",
  },
  {
    paragraphNumber: "Paragraph 5",

    enParagraphs: [
      {
        enParagraph:
          "Technology experts noted one issue with the latest outage was that the problematic software update could not be corrected remotely. Instead, individual machines had to be fixed, with bad files removed by technology workers.",
      },
    ],
    ptParagraph:
      "Especialistas em tecnologia observaram que um problema com a interrupção mais recente foi que a atualização de software problemática não pôde ser corrigida remotamente. Em vez disso, as máquinas tiveram que ser consertadas individualmente, com os arquivos problemáticos removidos pelos técnicos.",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph:
          "CrowdStrike’s main business is to provide solutions to help companies prevent internet attacks. However, company leaders made clear that the latest outage was only related to the software update and not part of any cybersecurity attack.",
      },
    ],
    ptParagraph:
      "O principal negócio da CrowdStrike é fornecer soluções para ajudar empresas a prevenir ataques na internet. No entanto, os líderes da empresa deixaram claro que a interrupção recente estava relacionada apenas à atualização de software e não fazia parte de um ataque cibernético.",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph:
          "CrowdStrike continued to inform the public about its latest correction efforts and provided guidance for some businesses to attempt to deal with the issue themselves.",
      },
    ],
    ptParagraph:
      "A CrowdStrike continuou a informar o público sobre seus últimos esforços de correção e forneceu orientações para que algumas empresas tentassem lidar com o problema por conta própria.",
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph:
          "The outage disrupted operations at airlines, banks, hospitals and organizations around the world.",
      },
    ],
    ptParagraph:
      "A interrupção atrapalhou as operações de companhias aéreas, bancos, hospitais e organizações ao redor do mundo.",
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph:
          "Among U.S. airlines, Delta officials said Monday it was forced to cancel more than 4,000 flights since the outage began last Friday. But other major carriers, including American Airlines and United, reported they had largely ended any flight disruptions.",
      },
    ],
    ptParagraph:
      "Entre as companhias aéreas dos EUA, os executivos da Delta disseram na segunda-feira que foram forçados a cancelar mais de 4.000 voos desde que a interrupção começou na última sexta-feira. Mas outras grandes companhias, incluindo American Airlines e United, informaram que já haviam praticamente encerrado as interrupções nos voos.",
  },
  {
    paragraphNumber: "Paragraph 10",
    enParagraphs: [
      {
        enParagraph:
          "Delta chief Ed Bastian apologized to the airline’s customers for the continuing delays and cancellations. He said the company was working around the clock to fix all affected systems. Delta said about 60 percent of its main systems run on Microsoft Windows and therefore were left inoperable by the outage.",
      },
    ],
    ptParagraph:
      "O chefe da Delta, Ed Bastian, pediu desculpas aos clientes da companhia aérea pelos atrasos e cancelamentos contínuos. Ele afirmou que a empresa estava trabalhando incansavelmente para corrigir todos os sistemas afetados. A Delta informou que cerca de 60% de seus sistemas principais operam com o Microsoft Windows e, portanto, ficaram inoperantes devido à interrupção.",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph:
          "Some technology experts expressed concern that such outages can be extremely disruptive because the systems built to run most of the world’s computers are provided by only a small number of companies.",
      },
    ],
    ptParagraph:
      "Alguns especialistas em tecnologia expressaram preocupação de que tais interrupções podem ser extremamente disruptivas, pois os sistemas que operam a maior parte dos computadores do mundo são fornecidos por um número reduzido de empresas.",
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph:
          "Gregory Falco is an assistant professor of engineering at Cornell University in New York. He studies internet security issues. Falco told The Associated Press it is a problem that so many computers worldwide depend on the same technologies and providers. “We rely on very few companies, and everybody uses the same folks, so everyone goes down at the same time,” Falco said.",
      },
    ],
    ptParagraph:
      'Gregory Falco é professor assistente de engenharia na Universidade Cornell, em Nova York. Ele estuda questões de segurança na internet. Falco disse à Associated Press que é um problema que tantos computadores em todo o mundo dependam das mesmas tecnologias e fornecedores. "Dependemos de poucas empresas, e todo mundo usa os mesmos fornecedores, então todos ficam fora do ar ao mesmo tempo," afirmou Falco.',
  },
  {
    paragraphNumber: "Paragraph 13",
    enParagraphs: [
      {
        enParagraph:
          "CrowdStrike is one of the largest cybersecurity service providers, especially in transportation, health care, banking and media. This is the reason it affected so many businesses in those industries. An irony of the outage was that companies normally look to CrowdStrike’s tools to help prevent internet attacks that could bring their systems down and cause costly disruptions.",
      },
    ],
    ptParagraph:
      "A CrowdStrike é uma das maiores fornecedoras de serviços de cibersegurança, especialmente nos setores de transporte, saúde, bancos e mídia. Por isso, afetou tantas empresas nesses setores. Uma ironia da interrupção foi que as empresas normalmente recorrem às ferramentas da CrowdStrike para ajudar a prevenir ataques na internet que poderiam derrubar seus sistemas e causar interrupções custosas.",
  },
  {
    paragraphNumber: "Paragraph 14",
    enParagraphs: [
      {
        enParagraph:
          'Falco noted that while fears of such a widespread outage have long existed, he thinks too few providers are becoming “even more entrenched” with certain technologies. "We like to think that we have a lot of players available. But at the end of the day, the biggest companies use all the same stuff."',
      },
    ],
    ptParagraph:
      'Falco observou que, embora o medo de uma interrupção tão ampla já exista há muito tempo, ele acha que há poucos fornecedores se tornando "ainda mais dominantes" em certas tecnologias. "Gostamos de pensar que temos muitos concorrentes disponíveis. Mas, no final das contas, as maiores empresas usam tudo o mesmo."',
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph:
          "Richard Stiennon is a cybersecurity expert who has followed industry developments for 24 years. He told the AP he sees the software issue as a historic mistake by CrowdStrike. “This is easily the worst faux pas, technical faux pas or glitch of any security software provider ever,” Stiennon said.",
      },
    ],
    ptParagraph:
      'Richard Stiennon é um especialista em cibersegurança que acompanha os desenvolvimentos da indústria há 24 anos. Ele disse à AP que vê o problema de software como um erro histórico por parte da CrowdStrike. "Este é facilmente o pior erro, falha técnica ou falha de qualquer provedor de software de segurança já registrado," afirmou Stiennon.',
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph:
          "He added that while the problem had an easy technical fix, it could still have lasting effects for some companies. This is because the outage required hands-on efforts to fix each affected computer and this can severely disrupt business operations.",
      },
    ],
    ptParagraph:
      "Ele acrescentou que, embora o problema tivesse uma solução técnica fácil, ainda pode ter efeitos duradouros para algumas empresas. Isso porque a interrupção exigiu esforços manual para consertar cada computador afetado, o que pode perturbar severamente as operações comerciais.",
  },
  {
    enParagraphs: [
      {
        enParagraph: "I’m Bryan Lynn",
      },
    ],
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "What caused the computer outage?",
    answer: "A software update from CrowdStrike with a programming mistake.",
  },
  {
    question: "Which businesses were affected?",
    answer: "Airlines, banks, hospitals, and media companies.",
  },
  {
    question: "How did CrowdStrike respond?",
    answer:
      "They admitted the mistake, identified the problem, and deployed a fix to assist customers.",
  },
  {
    question: "What was unique about fixing the problem?",
    answer:
      "It required hands-on efforts to fix each affected machine individually.",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "How such outages can affect your everyday life?",
    ptQuestion: "Como essas falhas podem afetar seu dia a dia?",
  },
];

export default function BusinessesRecoverFromMajorWorldwideTechOutage() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={["Businesses Recover from Major Worldwide Tech Outage"]}
        subdescription="July 24, 2024"
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
            audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/07/24/01000000-0aff-0242-914a-08dcabf9c604.mp3"
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
