import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { ArticleData, Articles } from "@/components/Articles";

// Images
import doctorPatient from "./doctor-patient.png";
import sickle from "./sickle.jpg";

const articles: ArticleData[] = [
  {
    beforeImgSrc: doctorPatient,
    beforeImgSrcWidth: "350px",
    beforeImgSrcHeight: "200px",
    beforeAltName: "Doctor with patient",
    enParagraphs: [
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/g/gene.mp3",
          label: "Gene",
        },
        enParagraph: "treatments are being credited with permitting",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/s/several.mp3",
          label: "several",
        },
        enParagraph: "children born with",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/d/deafness.mp3",
          label: "deafness",
        },
        enParagraph: "to hear again.",
      },
    ],
    ptParagraph:
      "Os tratamentos genéticos estão sendo creditados por permitir que várias crianças nascidas com surdez voltem a ouvir.",
  },
];

export default function StudiesGeneTreatmentLetsChildrenDeafAtBirthHear() {
  return (
    <div>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={[
          "Articles",
          "Studies: Gene Treatment Lets Children Deaf at Birth Hear",
        ]}
      />
      <div>
        <Articles
          articles={articles}
          audioSrc="/assets/audio/specific-purposes/medicine/articles/studies-gene-treatment-lets-children-deaf-at-birth-hear/audio.mp3"
        />
      </div>
    </div>
  );
}
