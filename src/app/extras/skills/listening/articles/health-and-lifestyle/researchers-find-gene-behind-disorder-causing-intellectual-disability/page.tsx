"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import SwiperFraction from "@/components/Swiper/Fraction";
import {
  DiscussionQuestion,
  PreVocabulary,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { humanChromosomes } from "@/img/index";
import { ScrollToTop } from "@/components/ScrollToTop";

const swiperFraction = [
  {
    imgSrc: humanChromosomes,
    imgAlt:
      "This microscope image shows the 46 human chromosomes, blue, with telomeres appearing as white pinpoints. (Hesed Padilla-Nash, Thomas Ried/National Cancer Institute/National Institutes of Health via AP, File)",
  },
];

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "1. What can you see in this image?",
      },
    ],
  },
  {
    questions: [
      {
        question: "2. Do you know any genetic disorder?",
      },
    ],
  },
  {
    questions: [
      {
        question: "3. What do you call these white pinpoints in the images?",
      },
    ],
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/chromosome.mp3",
      keyword: "chromosome",
      label: "chromosome",
      phonetics: "/ˈkroʊ.mə.soʊm/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/disorder.mp3",
      keyword: "disorder",
      label: "disorder",
      phonetics: "/dɪˈsɔːr.dɚ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/g/genetic-code.mp3",
      keyword: "genetic code",
      label: "genetic code",
      phonetics: "/dʒəˈnet̬.ɪk koʊd/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/i/intellectual.mp3",
      keyword: "intellectual",
      label: "intellectual",
      phonetics: "/ˌɪn.t̬əlˈek.tʃu.əl/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/p/potential.mp3",
      keyword: "potential",
      label: "potential",
      phonetics: "/poʊˈten.ʃəl/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/seizure.mp3",
      keyword: "seizure",
      label: "seizure",
      phonetics: "/ˈsiː.ʒɚ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/stature.mp3",
      keyword: "stature",
      label: "stature",
      phonetics: "/ˈstætʃ.ɚ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/t/telomeres.mp3",
      label: "telomers",
      phonetics: "/ˈte.lə.mɪrz/",
    },
  },
];

const paragraphs: Paragraph[] = [
  {
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        enParagraph:
          "Scientists have found the genetic root of a disorder that causes intellectual disability. They say the disorder may affect as many as one in 20,000 young people.",
      },
    ],
    ptParagraph:
      "Cientistas descobriram a raiz genética de um distúrbio que causa deficiência intelectual. Eles dizem que o distúrbio pode afetar até uma em cada 20.000 pessoas jovens.",
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "Those with the disorder share a number of conditions, which also include short stature, small heads, seizures and low muscle mass, said the researchers. They published their findings in Nature Medicine.",
      },
    ],
    ptParagraph:
      "Aqueles com o distúrbio compartilham várias condições, que também incluem baixa estatura, cabeças pequenas, convulsões e baixa massa muscular, disseram os pesquisadores. Eles publicaram suas descobertas na revista Nature Medicine.",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph:
          "“We were struck by how common this disorder is” when compared with other rare diseases linked to a single gene, said study lead investigator Ernest Turro of the Icahn School of Medicine at Mount Sinai in New York City. The researcher say the findings could help doctors in identifying, the disorder.",
      },
    ],
    ptParagraph:
      '"Ficamos surpresos com a frequência desse distúrbio" em comparação com outras doenças raras ligadas a um único gene, disse o investigador principal do estudo, Ernest Turro, da Escola de Medicina Icahn no Monte Sinai, na cidade de Nova York. Os pesquisadores dizem que as descobertas podem ajudar os médicos a identificar o distúrbio.',
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph:
          "Charles Billington is a geneticist at the University of Minnesota who works with children. He was not involved in the study. He said doctors sometimes do not correctly diagnose patients with disorders like these because the signs are hard to recognize.",
      },
    ],
    ptParagraph: "",
  },
  {
    paragraphNumber: "Paragraph 5",

    enParagraphs: [
      {
        enParagraph:
          "“So certainly this wasn’t something that we necessarily had a name for,” he said.",
      },
    ],
    ptParagraph: "",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph:
          "Researchers said the mutations, or changes took place in a “non-coding” gene. Non-coding genes do not provide directions for making proteins. Until now, all but nine of the nearly 1,500 genes known to be linked to intellectual disability are protein-coding genes.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph:
          "Most large genetic studies use technology that considers only genes that direct protein production.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph:
          "This study used more complete “whole-genome” data from about 77,000 people who took part in the British government’s 100,000 Genomes Project. About 5,500 had intellectual disability.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph:
          "The rare mutations researchers found in the gene, called RNU4-2, were strongly associated with the potential for having intellectual disability.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 10",
    enParagraphs: [
      {
        enParagraph:
          "Andrew Mumford is research director of the South West England NHS Genomic Medicine Service. He helped write the study. He said the finding “opens the door to diagnoses” for thousands of families.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph:
          "More research is needed, Mumford said. How the mutation causes the disorder remains unclear and there is no treatment.",
      },
    ],
    ptParagraph:
      "Mais pesquisas são necessárias, disse Mumford. Como a mutação causa o distúrbio ainda não está claro e não há tratamento.",
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph:
          "But Billington said laboratories should be able to offer testing for this condition soon. And researchers said families should be able to find and support each other – and know they are not alone.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 13",
    enParagraphs: [
      {
        enParagraph: "I’m Gregory Stachel.",
      },
    ],
    ptParagraph: "...",
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "How common is the disorder mentioned in the text?",
  },
  {
    question: "What are some of the symptoms of this disorder?",
  },
  {
    question:
      "What is the name of the lead investigator mentioned in the study?",
  },
  {
    question: "What kind of genetic mutations are involved?",
  },
  {
    question: "What project provided the data for this study?",
  },
  {
    question:
      "What is the potential significance of this study according to Andrew Mumford?",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    question:
      "How do you think this new research will impact the lives of families affected by the disorder?",
  },
  {
    question:
      "What are the potential benefits of being able to diagnose this disorder early?",
  },
];

const radioExercises = [
  {
    title: "1. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
  {
    title: "2. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
  {
    title: "3. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
  {
    title: "4. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
  {
    title: "5. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
];

export default function WeightLossOptionsForChildrenAreHardToGet() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={[
          "Researchers Find Gene behind Disorder Causing Intellectual Disability",
        ]}
        subdescription="June 10, 2024"
      />
      <div className="line-break">
        <SwiperFraction images={swiperFraction} />
        <div>
          <Listening
            discussion="Check out the pictures above. Swipe them to the right and answer the questions."
            discussionQuestions={discussionQuestions}
            preVocabularies={preVocabularies}
            audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/06/04/01000000-0aff-0242-bd74-08dc84d8b022.mp3"
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <Radio questions={radioExercises} />
      </div>
      <div className="line-break">
        <SwiperFraction images={swiperFraction} />
        <div>
          <Listening
            discussion="Check out the pictures above and answer the questions."
            discussionQuestions={discussionQuestions}
            preVocabularies={preVocabularies}
            audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/06/21/01000000-0aff-0242-830c-08dc923fce0e.mp3"
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <Radio questions={radioExercises} />
        <ScrollToTop />
      </div>
    </>
  );
}
