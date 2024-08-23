"use client";
import { Listening } from "@/components/Lessons/Listening";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestionData } from "@/components/Celta/Introduction";
import { FlipCardData } from "@/components/Cards/Flip";
import { PreVocabularyData } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlanksData } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { ParagraphData } from "@/components/Celta/Listening/ListeningForGist";
import { ScanQuestionData } from "@/components/Celta/Listening/ListeningForScan";
import { FollowupQuestionData } from "@/components/Celta/Listening/FollowUp";
import { ScrollToTop } from "@/components/ScrollToTop";

// Images
import {
  personHoldingTwoComputers,
  personMakingSpeech1,
  personHoldingPhone1,
  translate1,
  anticipate1,
  compelling1,
  clipboard1,
  characteristic1,
  upgrade1,
  intent1
} from "@/img/index";

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: personHoldingTwoComputers,
    imgAlt:
      "Brett Ostrum, Microsoft corporate vice president of Surface, holds up the new Surface Laptop and Surface Pro with built-in AI at an event of the company's AI assistant, Copilot, Monday, May 20, 2024, in Redmond, Wash. (AP Photo/Lindsey Wasson)",
  },
  {
    imgSrc: personMakingSpeech1,
    imgAlt: "A person making a speech",
  },
  {
    imgSrc: personHoldingPhone1,
    imgAlt: "A person holding a phone",
  },
];

const discussionQuestions: DiscussionQuestionData[] = [
  {
    questions: [
      {
        question:
          "What do you know about AI and its applications in everyday life?",
      }
    ],
  },
  {
    questions: [
      {
        question:
          "How often do you use it? What for?",
      },
    ],
  },
];

const flipCards: FlipCardData[] = [
  {
    imgSrc: translate1,
    imgAlt: "A clipart of papers and translation options.",
  },
  {
    imgSrc: anticipate1,
    imgAlt: "A clipart of a man looking through a telescope.",
  },
  {
    imgSrc: compelling1,
    imgAlt: "A clipart of a candidate making a speech. ",
  },
  {
    imgSrc: characteristic1,
    imgAlt: "A clipart of characteristics.",
  },
  {
    imgSrc: upgrade1,
    imgAlt: "A car \"being\" upgraded.",
  },
  {
    imgSrc: clipboard1,
    imgAlt: "A clipboard with checkboxes",
  },
  {
    imgSrc: intent1,
    imgAlt: "A pic with the word \"change\" with two checkboxes written love and fear.",
  },
];

const preVocabularies: PreVocabularyData[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/compelling.mp3",
      keyword: "compel",
      label: "compelling ",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/u/upgrade.mp3",
      keyword: "upgrade",
      label: "upgrade",
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
      audioSrc: "/t/translate.mp3",
      keyword: "translate",
      label: "translate",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/i/intent.mp3",
      keyword: "intent",
      label: "intent",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/a/anticipate.mp3",
      keyword: "anticipate",
      label: "anticipate",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/characteristic.mp3",
      keyword: "characteristic",
      label: "characteristics",
    },
  },
];

const fillInTheBlanks: FillInTheBlanksData[] = [
  {
    options: true,
    width: "74px",
    beforeBlank: "When you order from this website, you can",
    correctAnswer: ["track"],
    afterBlank: "the shipment online.",
    portuguese: "Quando você faz um pedido neste site, pode ... o envio online.",
    lineBreakAfter: true,
  },
  
  {
    options: true,
    width: "111px",
    beforeBlank: "The police always",
    correctAnswer: [" anticipate"],
    afterBlank: "trouble at protests.",
    portuguese: "A polícia sempre ... problemas em protestos.",
    lineBreakAfter: true,
  },

  {
    options: true,
    width: "172px",
    beforeBlank: "She has some ",
    correctAnswer: ["characteristics"],
    afterBlank: "that make her stand out from the crowd. ",
    portuguese: "Ela tem algumas ... que a fazem se destacar na multidão.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "95px",
    beforeBlank: "This software is really out of date; you need to",
    correctAnswer: ["upgrade"],
    afterBlank: ", if you want to stay competitive.",
    portuguese: "Este software está realmente desatualizado; você precisa fazer uma ... se quiser permanecer competitivo.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "125px",
    beforeBlank: "Simone",
    correctAnswer: ["translates"],
    afterBlank: "novels for a living. ",
    portuguese: "Simone ganha a vida ... romances.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "121px",
    beforeBlank: "The court did not find the evidence",
    correctAnswer: ["compelling"],
    afterBlank: ".",
    portuguese: "O tribunal não achou as evidências ...",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "73px",
    beforeBlank: "It was not Amy's",
    correctAnswer: ["intent"],
    afterBlank: "to hurt anyone.",
    portuguese: "Não era a ... de Amy machucar ninguém.",
    lineBreakAfter: true,
  },
  
  
];

const paragraphs: ParagraphData[] = [
  {
    enParagraphs: [
      {
        enParagraph:
          "American software maker Microsoft says it will release new computer models with built-in artificial intelligence (AI) tools.",
      },
    ],
    ptParagraph:
      "Fabricante de software americana Microsoft diz que lançará novos modelos de computadores com ferramentas de inteligência artificial (IA) integradas.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The new computers will be equipped with a new version of Microsoft’s existing AI tool, called Copilot. Copilot can operate across a series of Microsoft business products.",
      },
    ],
    ptParagraph:
      "Os novos computadores serão equipados com uma nova versão da ferramenta de IA existente da Microsoft, chamada Copilot. O Copilot pode operar em uma série de produtos empresariais da Microsoft.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The Copilot service is based on OpenAI’s ChatGPT tool, which launched in late 2022. ChatGPT is an AI tool designed to interact smoothly with humans and perform high-level writing and creative work. Such tools are also known as chatbots or generative AI.",
      },
    ],
    ptParagraph:
      "O serviço Copilot é baseado na ferramenta ChatGPT da OpenAI, que foi lançada no final de 2022. O ChatGPT é uma ferramenta de IA projetada para interagir de forma fluida com humanos e realizar trabalhos de escrita e criação de alto nível. Essas ferramentas também são conhecidas como chatbots ou IA generativa.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Microsoft is a major investor in OpenAI. It is providing computing power and support for ChatGPT’s operations.",
      },
    ],
    ptParagraph:
      "A Microsoft é um grande investidor na OpenAI. Está fornecendo poder de computação e suporte para as operações do ChatGPT.",
  },
  {

    enParagraphs: [
      {
        enParagraph:
          "Microsoft recently introduced the new tools at an event at its headquarters in Seattle, Washington. Chief executive Satya Nadella announced that the new computers will come loaded with the new Copilot+ system. The company said these new Windows-based PCs – which it calls “AI-ready” – will be “the fastest, most intelligent” ever built.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The event came one day before Microsoft’s yearly developer conference. That is where Microsoft introduces its latest new products and services to developers and the public.",
      },
    ],
    ptParagraph:
      "O evento ocorreu um dia antes da conferência anual de desenvolvedores da Microsoft. É onde a Microsoft apresenta seus mais recentes produtos e serviços para desenvolvedores e para o público.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The announcement is Microsoft’s latest move to deploy OpenAI’s technology through Copilot to many product offerings. The system is already available for the company’s Teams, Outlook, Bing search engine and Windows operating system.",
      },
    ],
    ptParagraph:
      "O anúncio é a mais recente iniciativa da Microsoft para implantar a tecnologia da OpenAI por meio do Copilot em muitas de suas ofertas de produtos. O sistema já está disponível para o Teams, Outlook, motor de busca Bing e sistema operacional Windows da empresa.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Microsoft said its AI-based PCs will start being released on June 18 on the company’s own Surface models. It will also be on PCs produced by partners. These include Lenovo, Dell, Acer and HP.",
      },
    ],
    ptParagraph:
      "A Microsoft disse que seus PCs baseados em IA começarão a ser lançados em 18 de junho nos modelos Surface da própria empresa. Também estarão disponíveis em PCs produzidos por parceiros. Esses incluem Lenovo, Dell, Acer e HP.",
  },
  {
    enParagraphs: [
      {
        enParagraph: '"These improvements provide the most',
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/c/compelling.mp3",
          keyword: "compelling",
          label: "compelling",
        },
      },
      {
        enParagraph:
          'reason to upgrade your PC in a long time," said Microsoft Vice President Yusuf Mehdi.',
      },
    ],
    ptParagraph:
      '"Essas melhorias fornecem o motivo mais convincente para atualizar seu PC em muito tempo", disse o vice-presidente da Microsoft, Yusuf Mehdi.',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Microsoft said the AI operations on the new PCs will take place on the device itself rather than a cloud server. This means users will not have to wait for information to be sent to and from the company’s data centers or pay extra money for this service.",
      },
    ],
    ptParagraph:
      "A Microsoft afirmou que as operações de IA nos novos PCs ocorrerão no próprio dispositivo, em vez de um servidor na nuvem. Isso significa que os usuários não precisarão esperar pelo envio e recebimento de informações dos centros de dados da empresa, nem pagarão dinheiro extra por esse serviço.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Microsoft has also promised that any tracking activity will only be done and saved on the device, not on company servers. Users will also be able to choose not to be tracked, the company added.",
      },
    ],
    ptParagraph:
      "A Microsoft também prometeu que qualquer atividade de rastreamento será realizada e armazenada apenas no dispositivo, não nos servidores da empresa. Além disso, os usuários poderão optar por não serem rastreados, acrescentou a empresa.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The Copilot+ AI offerings include live language translation and image creation. It also offers the ability to interact with the PCs through voice commands instead of clicking to perform certain jobs.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The new offerings also include a tool called Windows Recall. This gives the Copilot+ assistant what Microsoft describes as a “photographic memory” of a person's computer activity. The tool is designed to remember the things a user does on the PC in an effort to predict what the user might want to do next.",
      },
    ],
    ptParagraph:
      'As novas ofertas também incluem uma ferramenta chamada Windows Recall. Isso dá ao assistente Copilot+ o que a Microsoft descreve como uma "memória fotográfica" das atividades do computador de uma pessoa. A ferramenta é projetada para lembrar das ações que um usuário realiza no PC, com o objetivo de prever o que o usuário pode querer fazer em seguida.',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          'It\'s a step toward machines that “instantly see us, hear, reason about our intent and our surroundings,” Microsoft’s Nadella said. He added: "We’re entering this new era where computers not only understand us, but can actually anticipate what we want and our intent."',
      },
    ],
    ptParagraph:
      'É um passo em direção a máquinas que "nos veem instantaneamente, ouvem, raciocinam sobre nossa intenção e nosso ambiente", disse Nadella, da Microsoft. Ele adicionou: "Estamos entrando nesta nova era onde os computadores não apenas nos entendem, mas também podem prever o que queremos e nossa intenção."',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Nadella's announcement on AI comes shortly after some other major technology players announced new releases of their latest AI assistance systems.",
      },
    ],
    ptParagraph:
      "O anúncio de Nadella sobre IA vem pouco depois de outros grandes players de tecnologia anunciarem novos lançamentos de seus sistemas de assistência por IA mais recentes.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Last week, Google introduced an improved search engine that shows brief AI-produced results before direct website links. The company also showed off an AI assistant called Astra, which is still in development. Astra is designed to be able to “see” and talk about things shown through a smartphone’s camera.",
      },
    ],
    ptParagraph:
      'Na semana passada, o Google introduziu um motor de busca melhorado que exibe breves resultados produzidos por IA antes dos links diretos para sites. A empresa também apresentou um assistente de IA chamado Astra, que ainda está em desenvolvimento. Astra é projetado para poder "ver" e falar sobre coisas mostradas através da câmera de um smartphone.',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "OpenAI introduced its latest chatbot version, ChatGPT-4o last week. Company officials demonstrated the new tool, which showed improved human characteristics that can give opinions about things. The new version also comes with tools that aim to judge a person’s emotions. I’m Bryan Lynn.",
      },
    ],
    ptParagraph:
      "A OpenAI introduziu sua mais recente versão de chatbot, o ChatGPT-4o, na semana passada. Os funcionários da empresa demonstraram a nova ferramenta, que mostrou características humanas melhoradas, capazes de dar opiniões sobre diversos assuntos. A nova versão também vem com ferramentas que visam avaliar as emoções de uma pessoa.",
  },
];

const scanQuestions: ScanQuestionData[] = [
  {
    question: "What is the name of Microsoft’s AI tool?",
    answer: "The name of Microsoft’s AI tool is Copilot.",
  },
  {
    question: "Who is Microsoft’s CEO?",
    answer: "Microsoft’s CEO is Satya Nadella.",
  },
  {
    question: "When will the AI-based PCs start being released?",
    answer: "The AI-based PCs will start being released on June 18.",
  },
  {
    question: "What are some features of the Copilot+ system?",
    answer: "Some features of the Copilot+ system include live language translation, image creation, the ability to interact with PCs through voice commands, and a tool called Windows Recall that remembers a user's computer activity.",
  },
  {
    question: "Which other companies will produce PCs with the new AI tools?",
    answer: "Other companies that will produce PCs with the new AI tools include Lenovo, Dell, Acer, and HP.",
  },
];

const followupQuestions: FollowupQuestionData[] = [
  {
    enQuestion: "In what ways do you think AI can improve productivity in business settings?",
    ptQuestion: "De que maneiras você acha que a IA pode melhorar a produtividade em ambientes de negócios?",
  },
  {
    enQuestion: "Do you think AI technology will ever fully replace human workers? Why or why not?",
    ptQuestion: "Você acha que a tecnologia de IA algum dia substituirá totalmente os trabalhadores humanos? Por quê ou por quê não?",
  },
];

export default function MicrosoftAnnouncesNewsPcsWithBuiltInAi() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={[
          "Articles",
          "Science & Technology",
          "Microsoft Announces New PCs with Built-in AI",
        ]}
        subdescription="May 23, 2024"
      />
      <div className="line-break">
        <div>
          <Listening
            swiperFraction={swiperFraction}
            discussionQuestions={discussionQuestions}
            flipCards={flipCards}
            preVocabularies={preVocabularies}
            fillInTheBlanks={fillInTheBlanks}
            audioSrc="https://voa-audio.voanews.eu/VLE/2024/05/23/01000000-0aff-0242-868e-08dc7b2c160b.mp3"
            paragraphs={paragraphs}
            gistAnswer="The main issue discussed in the text is Microsoft's announcement of new computers equipped with built-in AI tools, specifically the new version of its Copilot AI assistant. The text details how these AI-ready PCs will incorporate advanced features, such as on-device AI operations, live language translation, image creation, and a new tool called Windows Recall, designed to enhance user experience by predicting user intent. The text also mentions the broader context of AI development by Microsoft and other major technology companies like Google and OpenAI."
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
