import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DescriptionCard } from "@/components/Cards/DescriptionCard";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "By date",
        contents: [
          {
            link: "/extras/skills/listening/articles/arts-and-culture/new-food-flavors-coming-to-stores",
            linkLabel: "New Food falvors coming to stores (May 24, 2024)",
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
        subtitle="Articles"
        descriptions={["Arts and Culture"]}
      />
      <div>
        <DescriptionCard descriptions={descriptions} />
      </div>
    </>
  );
}
