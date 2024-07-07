"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import {
  DiscussionQuestion,
  PreVocabulary,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import Slider from "@/components/SwiperFraction";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import {
  peoplePreparingFood,
  personAtASupermarketBrowsingVeggies,
  teenChoppingVegetable,
  teenLookingAtFoodLabel,
} from "@/img/index";
import { ScrollToTop } from "@/components/ScrollToTop";

const slider = [
  {
    imgSrc: teenChoppingVegetable,
    imgAlt: "A teenager chipping vegetables",
  },
  {
    imgSrc: peoplePreparingFood,
    imgAlt: "People prearing food",
  },
  {
    imgSrc: teenLookingAtFoodLabel,
    imgAlt: "Teen looking at food label",
  },
  {
    imgSrc: personAtASupermarketBrowsingVeggies,
    imgAlt: "Person at a supermarket-browsing-veggies",
  },
];

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "1. What can you see?",
      },
    ],
  },
  {
    questions: [
      {
        question: "2. What's happening?",
      },
    ],
  },
  {
    questions: [
      {
        question: "3. Why is it happening?",
      },
    ],
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/counseling.mp3",
      keyword: "counseling",
      label: "counseling",
      phonetics: "/ˈkaʊnsəlɪŋ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/i/insurance.mp3",
      keyword: "insurance",
      label: "insurance",
      phonetics: "/ɪnˈʃɜ.r.əns/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/obese.mp3",
      keyword: "obese",
      label: "obese",
      phonetics: "/oʊˈbiːs/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/obesity.mp3",
      keyword: "obesity",
      label: "obesity",
      phonetics: "/oʊˈbiː.sə.t̬i/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/p/pediatrics.mp3",
      keyword: "pediatrics",
      label: "pediatrics",
      phonetics: "/ˌpiː.diˈæt.rɪks/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/a/adolescent.mp3",
      keyword: "adolescent",
      label: "adolescent",
      phonetics: "/ˌæd.əˈles.ənt/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/l/lifestyle.mp3",
      keyword: "lifestyle",
      label: "lifestyle",
      phonetics: "/ˈlaɪf.staɪl/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/t/tempting.mp3",
      keyword: "tempting",
      label: "tempting",
      phonetics: "/ˈtemp.tɪŋ/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/a/adopt.mp3",
      keyword: "adopt",
      label: "adopt",
      phonetics: "/əˈdɑːpt/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/calorie.mp3",
      keyword: "calorie",
      label: "calorie",
      phonetics: "/ˈkæl.ɚ.i/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/l/label.mp3",
      keyword: "label",
      label: "label",
      phonetics: "/ˈleɪ.bəl/",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/c/clinical.mp3",
      keyword: "clinical",
      label: "clinical",
      phonetics: "/ˈklɪn.ɪ.kəl/",
    },
  },
];

const paragraphs: Paragraph[] = [
  {
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        enParagraph:
          "From VOA Learning English, this is the Health & Lifestyle report",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph:
          "For many parents in the United States, finding help for an",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/o/overweight.mp3",
          keyword: "overweight",
          label: "overweight",
        },
        enParagraph: "child is not easy. That is because the most ",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/w/widely.mp3",
          keyword: "widely",
          label: "widely",
        },
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/s/suggested.mp3",
          keyword: "suggested",
          label: "suggested",
        },
        enParagraph: "treatment is not widely",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/a/available.mp3",
          keyword: "available",
          label: "available",
        },
        enParagraph: ".",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph:
          "Leading medical groups suggest intense behavioral counseling. These types of programs teach children and their families about easy ways to eat healthier and exercise more.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph:
          "However, these programs have long waiting periods. They are often not covered by health insurance. And they require a lot of time. As a result, less than one percent of the nearly 15 million U.S. children who struggle with obesity get the recommended kind of care. That information comes from the U.S. Centers for Disease Control and Prevention, or CDC.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 5",

    enParagraphs: [
      {
        enParagraph:
          "Reporters with the Reuters news agency spoke with doctors, parents and other experts about the difficulties of getting such treatment for obese children.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph:
          "The CDC and others have tried to expand insurance coverage for the behavioral counseling programs. But so far, that has not happened, doctors told Reuters.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph:
          '"The coverage for these programs was never good, and we\'re not seeing any movement toward improvement," said Dr. Joseph Skelton. He is a professor of child medicine, or pediatrics. Skelton is also an obesity medicine specialist at Wake Forest University School of Medicine in North Carolina.',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph:
          "Obesity among U.S. children has increased from five percent in 1980 to nearly 20 percent today, CDC experts say.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph:
          "Novo Nordisk's weight-loss drug Wegovy was approved for adults in 2021 and for adolescents in late 2022. The drug provides a highly effective way to lose weight. The drugmaker still cannot meet demand for the drug among adults. Each week, there are at least 25,000 first-time users of the drug.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 10",
    enParagraphs: [
      {
        enParagraph:
          "A much smaller, but growing, number of families are seeking the drug for their adolescents, Reuters reported earlier this year. Many doctors and parents are unsure of using the medication. They do not know if Wegovy can affect a child’s development or create other long-term risks.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph:
          "Ruth Medina of Holyoke, Massachusetts, was worried about her daughter, Jelainie. At age 15, Jelainie weighed over 90 kilograms. The family has a history of type 2 diabetes, a condition worsened by being overweight. Medina did not want that to happen.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph: '"…That\'s when I got scared," Medina said.',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 13",
    enParagraphs: [
      {
        enParagraph:
          "So, she wanted make healthy changes for her family and sought help. Jelainie's doctor suggested the healthy weight program at Holyoke Health Center. In this program, children and their parents meet with a food expert and a community health worker. Together they set individual weight goals, cook healthy meals, learn how to read food labels, and talk about healthy lifestyle choices.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 14",
    enParagraphs: [
      {
        enParagraph:
          "Dr. Vinny Biggs runs the program. He said there is a four-month wait to get into the program. Biggs said Medina and her daughter’s treatment is partly covered by the state Medicaid health insurance.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph:
          "At the family's first meeting, Jelainie prepared a rice and vegetables dish with her teachers. She and her mother both said they liked the healthy meal.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 16",
    enParagraphs: [
      {
        enParagraph:
          "Jelainie has lost some weight. She started walking more, playing tennis and eating more fruits and vegetables. However, her mother still worries about the appeal of the many fast-food restaurants close to their home. For her daughter, they are tempting.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 17",
    enParagraphs: [
      {
        enParagraph:
          '"We walk by so many temptations," Medina said. "I want to do whatever I can to get her to a healthy weight."',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 18",
    enParagraphs: [
      {
        enParagraph:
          'Dr. Thomas Robinson is director of the Center for Healthy Weight at Stanford Medicine Children’s Health in California. He said, "Many of us believe it would make sense to offer behavioral counseling along with the drug."',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 19",
    enParagraphs: [
      {
        enParagraph:
          'He added, "These drugs are very effective at reducing weight and health risks, but you don\'t all of a sudden adopt a healthy diet or become more physically active," he said.',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 20",
    enParagraphs: [
      {
        enParagraph:
          "With Stanford's lifestyle-counseling program, instructors give parents and their children long-established lessons about eating wisely. They use the colors of a traffic light to teach these lessons.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 21",
    enParagraphs: [
      {
        enParagraph:
          'High-calorie foods, such as ice cream or even almonds, are "red-light" foods. They should not be eaten often. Vegetables are "green light" foods. Kids can eat as many green light foods as they want. Most foods, Robinson explained, are "yellow light" and fall somewhere in between.',
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 22",
    enParagraphs: [
      {
        enParagraph:
          "Health insurance does not cover Stanford's program. So families pay out-of-pocket or receive financial help from the hospital, Robinson said. The full cost of the program is $3,500.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 23",
    enParagraphs: [
      {
        enParagraph:
          "Since 2022, the CDC, American Academy of Pediatrics and other experts have pushed for better insurance coverage of obesity counseling. In September, an American Medical Association (AMA) group of experts rejected one of those efforts. The effort was a request for the creation of a medical code for the intensive program. This code would help providers bill insurance companies for their services.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 24",
    enParagraphs: [
      {
        enParagraph:
          "However, in a statement, the AMA told Reuters the application did not meet the group's standards. The AMA explained that a new code may not be approved by insurance providers if the programs include non-clinical services, such as cooking classes. Even if a new code is created, health insurers can still refuse to pay for medical services.",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 25",
    enParagraphs: [
      {
        enParagraph:
          "In a statement to Reuters, the CDC said that guaranteeing fair access to both obesity medications and lifestyle treatment is critical. That would give families more choices when deciding how to best support their child’s health.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "And that’s the Health & Lifestyle report.",
      },
    ],
    ptParagraph: "I’m Anna Matteo.",
  },
  {
    enParagraphs: [
      {
        enParagraph: "And I’m Andrew Smith.",
      },
    ],
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question:
      "What is the most widely suggested treatment for overweight children in the U.S.?",
  },
  {
    question: "What are some barriers to accessing these programs?",
  },
  {
    question:
      "Who is Dr. Joseph Skelton, and what does he say about insurance coverage?",
  },
  {
    question: "What did Ruth Medina do to help her daughter, Jelainie?",
  },
  {
    question:
      "What method does Stanford's lifestyle-counseling program use to teach healthy eating?",
  },
  {
    question:
      'What are the three types of "light" foods mentioned in the article?',
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    question:
      "Do you think behavioral counseling should be more widely available? Why or why not?",
  },
  {
    question: "How important is insurance coverage for these programs?",
  },
  {
    question:
      'What do you think of the "red light, green light" method? Could it be effective?',
  },
  {
    question:
      "How can schools and communities help address the issue of childhood obesity?",
  },
];

const radioExercises = [
  {
    title: "Answer the questions.",
    question:
      "1. What has the CDC and other organizations tried to do regarding behavioral counseling programs?",
    options: [
      {
        label: "a) Reduce the length of the programs",
        isCorrect: false,
      },
      {
        label: "b) Expand insurance coverage for the programs",
        isCorrect: true,
      },
      { label: "c) Decrease the intensity of the programs", isCorrect: false },
    ],
  },
  {
    question:
      "2. What motivated Ruth Medina to seek help for her daughter, Jalainie?",
    options: [
      {
        label: "a) She wanted her daughter to join a sports team",
        isCorrect: false,
      },
      {
        label: "b) She noticed her daughter’s weight was affecting her health",
        isCorrect: true,
      },
      {
        label: "c) She was pressured by her daughter’s school",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "3. What happens during the first meeting of the Holyoke Health Center's program?",
    options: [
      {
        label: "a) Children receive a medical check-up",
        isCorrect: false,
      },
      {
        label: "b) Parents and children prepare a healthy meal together",
        isCorrect: true,
      },
      {
        label: "c) Families watch a video about healthy eating",
        isCorrect: false,
      },
    ],
  },
  {
    question: '4. How does Stanford\'s program categorize "red-light" foods?',
    options: [
      {
        label: "a) Foods that should be eaten in moderation",
        isCorrect: true,
      },
      {
        label:
          "b) Foods that should be eaten rarely due to high-calorie content",
        isCorrect: true,
      },
      {
        label: "c) Foods that can be eaten freely without restriction",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "5. What is one of the reasons insurance companies may not cover obesity counseling programs?",
    options: [
      {
        label: "a) The programs are too new",
        isCorrect: false,
      },
      {
        label: "b) They are not recommended by medical professionals",
        isCorrect: false,
      },
      {
        label: "c) They include non-clinical services like cooking classes",
        isCorrect: true,
      },
    ],
  },
];

export default function WeightLossOptionsForChildrenAreHardToGet() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Health & Lifestyle"
        descriptions={["Weight-loss Options for Children Are Hard to Get"]}
        subdescription="June 24, 2024"
      />
      <div className="line-break">
        <Slider images={slider} />
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
