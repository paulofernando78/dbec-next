import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

const whiteboard = {
  title: "Listening",
  subtitle: "Articles",
  descriptions: ["Arts and Culture"],
};

const contents = [
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "By date",
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
      <div>
        <ContentCard whiteboard={whiteboard} contents={contents} />
      </div>
    </>
  );
}
