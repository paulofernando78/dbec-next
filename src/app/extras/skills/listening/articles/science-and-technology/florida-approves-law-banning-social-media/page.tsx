"use client";
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

import {
  GistQuestion,
  Listening,
} from "@/components/Lessons/Listening";

import {
  socialMedia1,
  socialMedia2,
  socialMediaParent1,
  addictive1,
  consent1,
  diversity1,
  enact1,
  challenge1
} from "@/img/index";
import { FollowupQuestion } from "@/components/Celta/Listening/FollowUp";


const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "How old were you when you first started using social media?",
      },
    ],
  },
  {
    questions: [
      {
        question:
          "What age do you think is appropriate for kids to start using social media? Why?",
      },
    ],
  },
];

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: socialMedia1,
    imgAlt: "...",
  },
  {
    imgSrc: socialMedia2,
    imgAlt: "...",
  },
  {
    imgSrc: socialMediaParent1,
    imgAlt: "...",
  },
];

const flipCards: FlipCard[] = [
  {
    imgSrc: consent1,
    imgAlt: "An image representing the concept of \"consent\" with a serene and symbolic depiction.",
  },
  {
    imgSrc: diversity1,
    imgAlt: "An image about diversity.",
  },
  {
    imgSrc: challenge1,
    imgAlt: "An image about challenge.",
  },
  {
    imgSrc: addictive1,
    imgAlt: "An image depicting someone addicted to smartphone.",
  },
  {
    imgSrc: enact1,
    imgAlt: "An image of a woman signing a document.",
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/a/addictive.mp3",
      keyword: "addict",
      label: "addictive",
      phonetics: "/əˈdɪk.tɪv/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/consent.mp3",
      keyword: "consent",
      label: "consent",
      phonetics: "/kənˈsent/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/diversity.mp3",
      keyword: "diversity",
      label: "diversity",
      phonetics: "/dɪˈvɝː.sə.t̬i/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/e/enact.mp3",
      keyword: "enact",
      label: "enact",
      phonetics: "/ɪˈnækt/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/challenge.mp3",
      keyword: "challenge",
      label: "challenge",
      phonetics: "/ˈtʃæl.ɪndʒ/",
    },
  },
];

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "The greatest",
    correctAnswer: ["challenge"],
    afterBlank: "facing the region is unemployment.",
    lineBreakAfter: true,
  },

  {
    options: true,
    width: "100px",
    beforeBlank: "The written",
    correctAnswer: ["consent"],
    afterBlank: " of a parent is required.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "The game is very",
    correctAnswer: ["addictive"],
    afterBlank: ".",
    lineBreakAfter: true,
  },

  {
    options: true,
    width: "100px",
    beforeBlank: "The government decided to ",
    correctAnswer: ["enact"],
    afterBlank: "a new law to protect the environment.",
    lineBreakAfter: true,
  },

  {
    options: true,
    width: "100px",
    beforeBlank: "The town has a lot of",
    correctAnswer: ["diversity"],
    afterBlank: "with people from many different cultures living there.",
    lineBreakAfter: true,
  },
];

const gistQuestions: GistQuestion[] = [
  {
    question: "What is the main topic of the news report?",
    answer:
      "The main topic of the news report is a new law in Florida that regulates children's access to social media, requiring parental permission for 14- and 15-year-olds.",
  },
];

const paragraphs: Paragraph[] = [
  {
    enParagraphs: [
      {
        enParagraph:
          "Florida Governor Ron DeSantis on Monday signed a law that bans children in the state under the age of 14 from having a social media account.",
      },
    ],
    ptParagraph:
      "O governador da Flórida, Ron DeSantis, assinou uma lei na segunda-feira que proíbe crianças no estado com menos de 14 anos de terem uma conta em redes sociais.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The measure requires parental permission before 14 and 15 year olds can sign up for personal social media accounts in Florida.",
      },
    ],
    ptParagraph:
      "A medida exige permissão dos pais para que jovens de 14 e 15 anos possam se inscrever em contas pessoais de redes sociais na Flórida.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Supporters say the bill protects children from possible online harm, including threats to mental health and privacy.",
      },
    ],
    ptParagraph:
      "Os defensores dizem que o projeto de lei protege as crianças de possíveis danos online, incluindo ameaças à saúde mental e à privacidade.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Critics have said the law might violate the U.S. Constitution’s First Amendment protection of free speech. Some opponents have said they think parents – not the government – should be the ones to decide which restrictions are best for their child. Meta, the parent company of Facebook, opposed the legislation, for example.",
      },
    ],
    ptParagraph:
      "Os críticos disseram que a lei pode violar a proteção da Primeira Emenda da Constituição dos EUA à liberdade de expressão. Alguns opositores disseram que acham que os pais - e não o governo - devem ser os responsáveis por decidir quais restrições são melhores para seus filhos. A Meta, empresa controladora do Facebook, por exemplo, se opôs à legislação.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Florida’s legislature passed the law earlier this month. It was the second version of the measure. The first version, which passed Florida’s legislature in February, would have completely banned children under age 16 from social media.",
      },
    ],
    ptParagraph:
      "A legislatura da Flórida aprovou a lei no início deste mês. Esta foi a segunda versão da medida. A primeira versão, que foi aprovada pela legislatura da Flórida em fevereiro, teria proibido completamente crianças menores de 16 anos de usar redes sociais.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "DeSantis vetoed that version of the bill, saying he thought it was too restrictive of parental rights. But the governor’s office worked with legislators to come up with a new measure he could support. The new law leaves it up to parents to decide whether their 16 and 17 year olds can sign up for social media accounts.",
      },
    ],
    ptParagraph:
      "DeSantis vetou essa versão do projeto de lei, dizendo que achava que ela restringia demais os direitos dos pais. Mas o gabinete do governador trabalhou com os legisladores para criar uma nova medida que ele pudesse apoiar. A nova lei deixa a decisão para os pais sobre se seus filhos de 16 e 17 anos podem criar contas em redes sociais.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          'In a statement, DeSantis said research had repeatedly shown that social media services can harm children in several major ways. The legislation, he added, is designed to give parents "a greater ability to protect their children."',
      },
    ],
    ptParagraph:
      'Em uma declaração, DeSantis disse que pesquisas mostraram repetidamente que os serviços de redes sociais podem prejudicar as crianças de várias maneiras importantes. A legislação, acrescentou, é projetada para dar aos pais "uma maior capacidade de proteger seus filhos".',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The law is set to take effect on January 1, 2025. But experts say the measure is likely to face legal challenges in court.",
      },
    ],
    ptParagraph:
      "A lei está prevista para entrar em vigor em 1º de janeiro de 2025. Mas especialistas dizem que a medida provavelmente enfrentará desafios legais nos tribunais.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "DeSantis noted that another bill he signed into law two years ago was recently struck down by a federal appeals court. That law banned employers from requiring training sessions that included discussions about race, diversity and other issues. The appeals court ruled that such training methods violated the constitutional free speech rights of employers.",
      },
    ],
    ptParagraph:
      "DeSantis observou que outra lei que ele assinou há dois anos foi recentemente derrubada por um tribunal de apelações federal. Essa lei proibia os empregadores de exigirem sessões de treinamento que incluíssem discussões sobre raça, diversidade e outras questões. O tribunal de apelações decidiu que tais métodos de treinamento violavam os direitos constitucionais de liberdade de expressão dos empregadores.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          'The new law was guided through Florida’s House of Representatives by Republican Speaker Paul Renner. At a bill-signing ceremony at a school, Renner said a child, whose brain is still developing, “doesn’t have the ability to know that they’re being sucked into these addictive technologies.” He added, "Because of that, we have to step in for them."',
      },
    ],
    ptParagraph:
      'A nova lei foi conduzida pela Câmara dos Representantes da Flórida pelo presidente republicano Paul Renner. Em uma cerimônia de assinatura do projeto de lei em uma escola, Renner disse que uma criança, cujo cérebro ainda está se desenvolvendo, "não tem a capacidade de saber que está sendo atraída por essas tecnologias viciantes."Ele acrescentou: "Por causa disso, temos que intervir por elas."',
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The bill does not name any specific social media service. But it states that it targets social media sites using tools to get users to stay online for long periods. The measure does not cover services that mainly provide email, messaging or texting services.",
      },
    ],
    ptParagraph:
      "O projeto de lei não menciona nenhum serviço de rede social específico, mas afirma que visa sites de redes sociais que usam ferramentas para manter os usuários online por longos períodos. A medida não abrange serviços que fornecem principalmente e-mail, mensagens ou serviços de texto.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The law requires social media companies to permanently remove personal information collected from closed accounts. And it lets parents bring civil lawsuits against services failing to do so.",
      },
    ],
    ptParagraph:
      "A lei exige que as empresas de redes sociais removam permanentemente as informações pessoais coletadas de contas fechadas. Além disso, permite que os pais movam processos civis contra serviços que não cumprirem essa exigência.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Several U.S. states have considered similar legislation. In March 2023, Utah became the first to enact laws covering children's use of social media. Measures in Arkansas, Louisiana, Ohio and Texas soon followed. Several other states are also developing new rules.",
      },
    ],
    ptParagraph:
      "Vários estados dos EUA têm considerado legislação semelhante. Em março de 2023, Utah se tornou o primeiro estado a promulgar leis que abrangem o uso de redes sociais por crianças. Medidas em Arkansas, Louisiana, Ohio e Texas logo seguiram. Vários outros estados também estão desenvolvendo novas regras nesse sentido.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The Arkansas law required parental consent for minors to create new social media accounts. A federal judge blocked the law in August. The judge ruled the legislation was likely unconstitutional.",
      },
    ],
    ptParagraph:
      "A lei de Arkansas exigia o consentimento dos pais para menores criarem novas contas em redes sociais. Um juiz federal bloqueou a lei em agosto. O juiz decidiu que a legislação provavelmente era inconstitucional.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "Florida has enacted additional measures aimed at protecting children from possible technological harms. Last year, it became the first state to strongly restrict phones in schools. The law requires all public schools in Florida to ban student cellphone use and block social media services during class. I'm Bryan Lynn.",
      },
    ],
    ptParagraph:
      "A Flórida promulgou medidas adicionais destinadas a proteger as crianças de possíveis danos tecnológicos. No ano passado, tornou-se o primeiro estado a restringir fortemente o uso de telefones celulares nas escolas. A lei exige que todas as escolas públicas na Flórida proíbam o uso de celulares pelos alunos e bloqueiem serviços de redes sociais durante as aulas.",
  }
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "What are the age restrictions mentioned in the new law?",
    answer: "Children under 14 are banned from having a social media account. Ages 14-15 require parental permission. Parents decide for 16-17-year-olds.",
  },
  {
    question: "Why did Governor DeSantis veto the first version of the bill?",
    answer: "Governor DeSantis vetoed the first version because it was too restrictive of parental rights.",
  },
  {
    question: "What are some arguments from supporters and critics of the law?",
    answer: "Supporters: The law protects children from online harm. Critics: It may violate the First Amendment, and parents, not the government, should decide restrictions.",
  },
  {
    question: "When will the law take effect?",
    answer: "The law is set to take effect on January 1, 2025.",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "Do you agree with the age restrictions? Why or why not?",
    // ptQuestion: "Você concorda com as restrições de idade? Por quê?",
  },
  {
    enQuestion:
      "How might this law impact children and their use of social media?",
    // ptQuestion:
    //   "Como essa lei pode impactar as crianças e seu uso de redes sociais?",
  },
];

export default function FloridaApprovesLawBanningSocialMediaForChildrenunder14() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={[
          "Florida Approves Law Banning Social Media for Children under 14",
        ]}
        subdescription="March 27, 2024"
      />
      <div className="line-break">
        <Listening
          discussion="Check out the pictures above. Swipe them to the right and answer the questions."
          swiperFraction={swiperFraction}
          discussionQuestions={discussionQuestions}
          flipCards={flipCards}
          preVocabularies={preVocabularies}
          fillInTheBlanks={fillInTheBlanks}
          audioSrc="https://voa-audio.voanews.eu/VLE/2024/03/27/01000000-0aff-0242-4563-08dc4e7c6170.mp3"
          paragraphs={paragraphs}
          scanQuestions={scanQuestions}
          followupQuestions={followupQuestions}
        />
      </div>
      <ScrollToTop />
    </>
  );
}
