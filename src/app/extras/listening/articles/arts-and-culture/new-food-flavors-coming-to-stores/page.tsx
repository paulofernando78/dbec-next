import { ArticleData, Articles } from '@/components/Articles'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { DictionaryCard } from '@/components/DictionaryCard/DictionaryCard';

const articles: ArticleData[] = [
    {
      //   beforeImgSrc: ...,
      //   beforeImgSrcWidth: "350px",
      //   beforeImgSrcHeight: "200px",
      //   beforeAltName: "...",
      enParagraphs: [
        {
          component: (props) => <DictionaryCard {...props} />,
          componentProps: {
            audioSrc: "/g/gene.mp3",
            label: "Gene",
          },
          enParagraph: "...",
        },
      ],
      ptParagraph:
        "...",
      ///   afterImgSrc: ...,
      //   afterImgSrcWidth: "350px",
      //   afterImgSrcHeight: "200px",
      //   afterAltName: "...",
    },
    {
      enParagraphs: [
        {
          enParagraph: "...",
        },
      ],
      ptParagraph: "...",
    },
  ];

export default function NewFoodFlavorsComingToStores() {
  return (
    <>
    <Whiteboard title='Listening / Speaking' subtitle='Articles' descriptions={["New Food Flavors Coming To Stores"]}/>
    <Articles articles={articles} />
    </>
  )
}
