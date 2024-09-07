import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

const contents = [
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "By date",
        contents: [
          {
            link: "/extras/skills/listening/articles/arts-and-culture/new-food-flavors-coming-to-stores",
            linkLabel: "New Food flavors coming to stores (May 24, 2024)",
          },
        ],
      },
    ],
  },
];

export default function ArtsAndCulture() {
  return (
    <>
      <Whiteboard
        title="Listening"
        subTitle="Articles"
        descriptions={["Arts and Culture"]}
      />
      <div>
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
