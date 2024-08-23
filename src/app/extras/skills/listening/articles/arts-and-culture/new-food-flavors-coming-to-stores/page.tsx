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
import {
  macAndCheeseIceCreamFlavor,
  chocolatePinkLemonadeKitKat,
  iceCreamHiddenValleyRanch,
  potatoChipLaysStrawBerryBacon,
  iceCreamLittleMoonFishMochi,
  potatoChipLaysFlamminHotDillPickle,
  potatoChipWalkersBrusselsSprout,
  cookieOreoSourPatch,
} from "@/img/index";

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: macAndCheeseIceCreamFlavor,
    imgAlt:
      "Ben Van Leeuwen scoops Kraft Mac & Cheese flavored ice cream Wednesday, May 15, 2024, in the Brooklyn borough of New York. (AP Photo/Frank Franklin II)",
  },
  {
    imgSrc: iceCreamHiddenValleyRanch,
    imgAlt: "Ranch Hidden Valley ice cream flavor",
  },
  {
    imgSrc: chocolatePinkLemonadeKitKat,
    imgAlt: "Lemonade Pink Kit Kat chocolate",
  },
  {
    imgSrc: potatoChipLaysStrawBerryBacon,
    imgAlt: "Lays Strawberry with Bacon potato chip",
  },
  {
    imgSrc: iceCreamLittleMoonFishMochi,
    imgAlt: "Little Moon's fish mochi ice cream",
  },
  {
    imgSrc: potatoChipLaysFlamminHotDillPickle,
    imgAlt: "Lays Flammin Hot Dill Pickle potato chip",
  },
  {
    imgSrc: potatoChipWalkersBrusselsSprout,
    imgAlt: "Walker's Brussels sprout potato chip",
  },
  {
    imgSrc: cookieOreoSourPatch,
    imgAlt: "Oreo's Sour Patch cookies",
  },
];

const discussionQuestions: DiscussionQuestionData[] = [
  {
    questions: [
      {
        question: "1. Is there anything",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/u/unusual.mp3",
          label: "unusual",
        },
        question: "about these",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/f/flavors.mp3",
          label: "flavors",
        },
        question: "?",
      },
    ],
  },
  {
    questions: [
      {
        question: "2. Would you like to try them? Which ones?",
      },
    ],
  },
];

const flipCards: FlipCardData[] = [
  {
    frontText: "What's the past of ask?",
    // imgSrc: ...,
    imgAlt: "A cat", 
    backText: "asked"
  }
]

const preVocabularies: PreVocabularyData[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/chef.mp3",
      keyword: "chef",
      label: "chef",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/e/edition.mp3",
      keyword: "edition",
      label: "edition",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/f/flavor.mp3",
      keyword: "falvor",
      label: "flavor",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/original.mp3",
      keyword: "original",
      label: "original",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/shock.mp3",
      keyword: "shock",
      label: "shock",
    },
  },
];

const fillInTheBlanks: FillInTheBlanksData[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "1. The tomatoes give extra",
    correctAnswer: ["flavor"],
    afterBlank: "to the sauce.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "2. The patient is in",
    correctAnswer: ["shock"],
    afterBlank: "from blood loss.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "3. Brad is a",
    correctAnswer: ["chef"],
    afterBlank: "at a fancy Italian restaurant.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "4. The first",
    correctAnswer: ["edition"],
    afterBlank: "of the book contained several factual errors.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "5. I think you should go back to your",
    correctAnswer: ["original"],
    afterBlank: " plan",
    lineBreakAfter: true,
  },
];

const paragraphs: ParagraphData[] = [
  {
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        enParagraph:
          "In New York, Van Leeuwen Ice Cream brings people in with classic",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/f/flavors.mp3",
          label: "flavors",
        },
        enParagraph:
          "like vanilla and pistachio. But, sometimes, the ice cream maker adds what it calls a “shock flavor,” like Hidden Valley Ranch or pizza, to the treat.",
      },
    ],
    ptParagraph:
      'Em Nova York, a Van Leeuwen Ice Cream atrai pessoas com sabores clássicos como baunilha e pistache. Mas, às vezes, o fabricante de sorvetes adiciona o que chama de "sabor surpreendente", como Hidden Valley Ranch ou pizza, ao produto.',
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "Recently, chocolate maker Hershey added pink lemonade, a summer drink flavor, to its candy Kit Kats. And Frito-Lay introduced potato chips that taste like strawberries with a little bit of bacon.",
      },
    ],
    ptParagraph:
      "Recentemente, o fabricante de chocolates Hershey adicionou o sabor de limonada rosa, uma bebida de verão, ao seu doce Kit Kat. E a Frito-Lay lançou batatas fritas com sabor de morango com um toque de bacon.",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph:
          "Not to be outdone, Britain's food company Little Moons produced fish-and-chip mochi ice cream flavor while Walkers celebrated the holidays with a potato chip flavor of Brussels sprouts.",
      },
    ],
    ptParagraph:
      'Para não ficar atrás, a empresa britânica de alimentos Little Moons produziu sorvete de mochi com sabor de "fish and chips", enquanto a Walkers celebrou as festas de fim de ano com batatas fritas sabor couve-de-bruxelas.',
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph:
          "Usually, these flavor combinations are introduced for a limited time. But sometimes the flavors are so popular that they become permanent additions. That is what happened with Frito-Lay’s Flamin’ Hot Dill Pickle chips in 2019.",
      },
    ],
    ptParagraph:
      "Geralmente, essas combinações de sabores são introduzidas por um tempo limitado. Mas, às vezes, os sabores são tão populares que acabam se tornando adições permanentes. Foi o que aconteceu com as batatas fritas Flamin' Hot Dill Pickle da Frito-Lay em 2019.",
  },
  {
    paragraphNumber: "Paragraph 5",
    enParagraphs: [
      {
        enParagraph:
          "While it would be easy to say the new and surprising flavors are produced to get attention on social media, experts say there is more to the story.",
      },
    ],
    ptParagraph:
      "Embora seja fácil dizer que os novos e surpreendentes sabores são produzidos para chamar a atenção nas redes sociais, os especialistas afirmam que há mais na história.",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph:
          "They say food companies are reacting to people’s changing and expanding tastes while also trying to stay current and win over space in stores.",
      },
    ],
    ptParagraph:
      "Dizem que as empresas de alimentos estão reagindo às mudanças e ampliação dos gostos das pessoas, ao mesmo tempo em que tentam se manter atualizadas e conquistar espaço nas lojas.",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph:
          "Kristen Braun works for Chicago-based food and drink company Mondelez International. She says people now want more than just one flavor and “companies are finding the freedom to explore a little bit more and get more creative.”",
      },
    ],
    ptParagraph:
      "Kristen Braun trabalha para a empresa de alimentos e bebidas Mondelez International, sediada em Chicago. Ela diz que as pessoas agora querem mais do que apenas um sabor, e as empresas estão encontrando a liberdade para explorar um pouco mais e serem mais criativas.",
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph:
          "Mondelez plans to release Sour Patch Kids Oreos – a kind of sweet vanilla cream-filled cookies combined with sour candies. The flavor is one of more than ten different Oreo flavors being sold this year for a limited time of nine weeks.",
      },
    ],
    ptParagraph:
      'A Mondelez planeja lançar os "Oreo Sour Patch Kids" - uma espécie de biscoitos recheados com creme de baunilha combinados com doces azedos. O sabor é um dos mais de dez sabores diferentes da "Oreo" que estão sendo vendidos este ano por um período limitado de nove semanas.',
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph:
          "Mark Lang teaches food marketing at the University of Tampa in Florida. He said that manufacturers and their suppliers have increased their ability to create such products. That has made it easier for them to experiment and put out limited editions more often.",
      },
    ],
    ptParagraph:
      "Mark Lang leciona marketing de alimentos na Universidade de Tampa, na Flórida. Ele afirmou que os fabricantes e seus fornecedores aumentaram sua capacidade de criar tais produtos. Isso tornou mais fácil para eles experimentarem e lançarem edições limitadas com mais frequência.",
  },
  {
    paragraphNumber: "Paragraph 10",
    enParagraphs: [
      {
        enParagraph:
          "Kyle Shadix is a research chef for the drink company PepsiCo. He said members of Generation Z, born between 1997 and 2012, are also fueling new ideas.",
      },
    ],
    ptParagraph:
      "Kyle Shadix é um chef de pesquisa para a empresa de bebidas PepsiCo. Ele disse que os membros da Geração Z, nascidos entre 1997 e 2012, também estão impulsionando novas ideias.",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph:
          "Shadix is currently experimenting with Mexican, Korean and Japanese flavors. \"Gen Z is going to drive us faster. We're going to start to see even more exploration quicker than in the past because they're just so open to it.\"",
      },
    ],
    ptParagraph:
      'Shadix está atualmente experimentando com sabores mexicanos, coreanos e japoneses. "A Geração Z vai nos impulsionar mais rapidamente. Vamos começar a ver ainda mais exploração acontecendo mais rápido do que no passado, porque eles estão simplesmente muito abertos a isso."',
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph:
          "Experimenting with new flavors can increase sales in several ways. Sometimes they bring in new buyers to a product. And sometimes they also influence buyers to pick up more of the original flavor.",
      },
    ],
    ptParagraph:
      "Experimentar novos sabores pode aumentar as vendas de várias maneiras. Às vezes, eles atraem novos compradores para um produto. E às vezes também influenciam os compradores a pegarem mais do sabor original.",
  },
  {
    paragraphNumber: "Paragraph 13",
    enParagraphs: [
      {
        enParagraph:
          'Russell Zwanka is director of the food marketing program at Western Michigan University. He said, "Sour Patch Oreos sound interesting, but nobody wants to risk buying Oreos that don’t taste good, so people buy both."',
      },
    ],
    ptParagraph:
      'Russell Zwanka é diretor do programa de marketing de alimentos na Western Michigan University. Ele disse: "Oreo de Sour Patch Kids parece interessante, mas ninguém quer arriscar comprar Oreos que não tenham um bom sabor, então as pessoas acabam comprando ambos."',
  },
  {
    paragraphNumber: "Paragraph 14",
    enParagraphs: [
      {
        enParagraph:
          "When companies combine products, they are trying to build a link in people’s minds. For example, Lang said when Pepsi combined its drink with Peeps candy flavor, it sent a message that Pepsi is current and fun.",
      },
    ],
    ptParagraph:
      "Quando as empresas combinam produtos, estão tentando criar uma associação na mente das pessoas. Por exemplo, Lang disse que quando a Pepsi combinou sua bebida com o sabor do doce Peeps, enviou uma mensagem de que a Pepsi é atual e divertida.",
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph: "But new flavor combinations do not always work.",
      },
    ],
    ptParagraph: "Mas nem sempre as novas combinações de sabores funcionam.",
  },
  {
    paragraphNumber: "Paragraph 16",
    enParagraphs: [
      {
        enParagraph:
          "Ben Van Leeuwen, the founder of the ice cream company bearing his name, said he could not eat more than a few bites of his company's Hidden Valley Ranch ice cream. It contained onion and garlic powders. And the “shock flavor” did not become a permanent part of his company's offerings because of their lower “eat-ability,” he said.",
      },
    ],
    ptParagraph:
      'Ben Van Leeuwen, o fundador da empresa de sorvetes que leva seu nome, disse que não conseguia dar mais do que algumas colheradas do sorvete Hidden Valley Ranch de sua empresa, pois continha pós de cebola e alho. E o "sabor surpreendente" não se tornou uma parte permanente das ofertas de sua empresa por causa de sua menor "comestibilidade", disse ele.',
  },
  {
    paragraphNumber: "Paragraph 17",
    enParagraphs: [
      {
        enParagraph:
          "But Lang thinks the more time people spend in restaurants or trying out new foods, the more they seek out unusual flavors.",
      },
    ],
    ptParagraph:
      "Mas Lang acredita que quanto mais tempo as pessoas passam em restaurantes ou experimentando novos alimentos, mais elas buscam sabores incomuns.",
  },
  {
    paragraphNumber: "Paragraph 18",
    enParagraphs: [
      {
        enParagraph: 'He said as humans, "We like to experiment."',
      },
    ],
    ptParagraph:
      'Ele disse que, como seres humanos, "gostamos de experimentar".',
  },
  {
    paragraphNumber: "Paragraph 19",
    enParagraphs: [
      {
        enParagraph: "I'm Gregory Stachel.",
      },
    ],
  },
];

const scanQuestions: ScanQuestionData[] = [
  {
    question: "What unusual flavor did Hershey add to its Kit Kats?",
    answer: "...",
  },
  {
    question: "Which generation is driving the trend for new flavors?",
    answer: "...",
  },
];

const followupQuestions: FollowupQuestionData[] = [
  {
    enQuestion:
      "Have you ever tried any of the unusual flavors mentioned in the article? Share your experience.",
    ptQuestion: "...",
  },
  {
    enQuestion:
      "Do you think introducing “shock flavors” is a good marketing strategy? Why or why not?",
    ptQuestion: "...",
  },
  {
    enQuestion:
      "What unusual flavor combinations would you like to see in the future?",
    ptQuestion: "...",
  },
  {
    enQuestion: "Are these flavors healthy?",
    ptQuestion: "...",
  },
  {
    enQuestion: "What are better choices?",
    ptQuestion: "...",
  },
];

export default function NewFoodFlavorsComingToStores() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={["Article", "New Food Flavors Coming To Stores"]}
      />
      <div className="line-break">
        <Listening
          swiperFraction={swiperFraction}
          discussionQuestions={discussionQuestions}
          flipCards={flipCards}
          preVocabularies={preVocabularies}
          fillInTheBlanks={fillInTheBlanks}
          audioSrc="https://voa-audio.voanews.eu/VLE/2024/05/21/01000000-0aff-0242-2f6f-08dc79de7d31.mp3"
          paragraphs={paragraphs}
          gistAnswer="aaa"
          scanQuestions={scanQuestions}
          followupQuestions={followupQuestions}
        />
        <ScrollToTop />
      </div>
    </>
  );
}
