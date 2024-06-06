import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { ArticleData, Articles } from "@/components/Articles";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const articles: ArticleData[] = [
  {
    //   beforeImgSrc: ...,
    //   beforeImgSrcWidth: "350px",
    //   beforeImgSrcHeight: "200px",
    //   beforeAltName: "...",
    enParagraphs: [
      {
        // component: (props) => <DictionaryCard {...props} />,
        // componentProps: {
        //   audioSrc: "/.../....mp3",
        //   label: "...",
        // },
        enParagraph:
          "Florida Governor Ron DeSantis on Monday signed a law that bans children in the state under the age of 14 from having a social media account.",
      },
    ],
    ptParagraph:
      "O governador da Flórida, Ron DeSantis, assinou na segunda-feira uma lei que proíbe crianças no estado com menos de 14 anos de terem uma conta em redes sociais.",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "The measure requires parental permission before 14 and 15 year olds can sign up for personal social media accounts in Florida.",
      },
    ],
    ptParagraph:
      "A medida exige a permissão dos pais para que adolescentes de 14 e 15 anos possam criar contas pessoais em redes sociais na Flórida.",
  },
  {
    enParagraphs: [
      {
        enParagraph: "Supporters say the bill protects children from possible online harm, including threats to mental health and privacy.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "Critics have said the law might violate the U.S. Constitution’s First Amendment protection of free speech. Some opponents have said they think parents – not the government – should be the ones to decide which restrictions are best for their child. Meta, the parent company of Facebook, opposed the legislation for example.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "Florida’s legislature passed the law earlier this month. It was the second version of the measure. The first version, which passed Florida’s legislature in February, would have completely banned children under age 16 from social media.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "DeSantis vetoed that version of the bill, saying he thought it was too restrictive of parental rights. But the governor’s office worked with legislators to come up with a new measure he could support. The new law leaves it up to parents to decide whether their 16 and 17 year olds can sign up for social media accounts.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "In a statement, DeSantis said research had repeatedly shown that social media services can harm children in several major ways. The legislation, he added, is designed to give parents \"a greater ability to protect their children.\"",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "The law is set to take effect on January 1, 2025. But experts say the measure is likely to face legal challenges in court.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "DeSantis noted that another bill he signed into law two years ago was recently struck down by a federal appeals court. That law banned employers from requiring training sessions that included discussions about race, diversity and other issues. The appeals court ruled that such training methods violated the constitutional free speech rights of employers.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "The new law was guided through Florida’s House of Representatives by Republican Speaker Paul Renner. At a bill-signing ceremony at a school, Renner said a child, whose brain is still developing, “doesn’t have the ability to know that they’re being sucked into these addictive technologies.” He added, “Because of that, we have to step in for them.”",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "The bill does not name any specific social media service. But it states that it targets social media sites using tools to get users to stay online for long periods. The measure does not cover services that mainly provide email, messaging or texting services.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "The law requires social media companies to permanently remove personal information collected from closed accounts. And it lets parents bring civil lawsuits against services failing to do so.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "Several U.S. states have considered similar legislation. In March 2023, Utah became the first to enact laws covering children's use of social media. Measures in Arkansas, Louisiana, Ohio and Texas soon followed. Several other states are also developing new rules.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "The Arkansas law required parental consent for minors to create new social media accounts. A federal judge blocked the law in August. The judge ruled the legislation was likely unconstitutional.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "Florida has enacted additional measures aimed at protecting children from possible technological harms. Last year, it became the first state to strongly restrict phones in schools. The law requires all public schools in Florida to ban student cellphone use and block social media services during class.",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "I’m Bryan Lynn.",
      },
    ],
    ptParagraph: "...",
  },
];

export default function FloridaApprovesLawBanningSocialMediaForChildrenUnder14() {
  return (
    <>
      <Whiteboard
        title="Specific-Purposes"
        subtitle="Law"
        descriptions={[
          "articles",
          "Florida Approves Law Banning Social Media for Children under 14",
        ]}
      />
      <div className="line-break">
        <Articles
          articles={articles}
          audioSrc="\assets\audio\specific-purposes\law\articles\florida-approves-law-banning-social-media\audio.mp3"
        />
      </div>
    </>
  );
}
