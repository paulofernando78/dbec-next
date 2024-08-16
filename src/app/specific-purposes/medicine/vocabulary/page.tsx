import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Card } from "@/components/Cards/Card";
import Image from "next/image";

import bladderCancer from "@/img/bladder-cancer.jpg";

interface Word {
  word?: string;
  component?: (props: {
    audioSrc: string;
    label: string;
    phonetics: string;
  }) => JSX.Element;
  componentProps?: any;
}

interface Item {
  label: string;
  words: Word[];
}

interface MedicineVocabularyProps {
  audioSrc: string;
  label: string;
  phonetics: string;
}

const items = [
  // Fields and Specialists
  {
    label: "Fields and Specialists",
    words: [
      // embryology
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/e/embryology.mp3",
          label: "embryology",
          phonetics: "/ˌem.briˈɑː.lə.dʒi/",
        },
      },
      // embryologist
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/e/embryologist.mp3",
          label: "embryologist",
          phonetics: "/ˌem.briˈɑː.lə.dʒɪst/",
        },
      },
      // pathology
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pathology.mp3",
          label: "pathology",
          phonetics: " /pəˈθɑː.lə.dʒi/",
        },
      },
      // pathologist
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pathologist.mp3",
          label: "pathologist",
          phonetics: " /pəˈθɑː.lə.dʒɪst/",
        },
      },
    ],
  },
  // Medical devices and Lab instruments / apparatus
  {
    label: "Medical devices and Lab instruments / apparatus",
    words: [
      // embryoscope
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/e/embryoscope.mp3",
          label: "embryoscope",
          phonetics: " /ˈembriəˌskoʊp",
        },
      },
      // endoscope
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/e/endoscope.mp3",
          label: "endoscope",
          phonetics: "/ˈen.doʊˌskoʊp/",
        },
      },
      // pacemaker
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pacemaker.mp3",
          label: "pacemaker",
          phonetics: "/ˈpeɪsˌmeɪ.kɚ/",
        },
      },
      // pipette
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pipette.mp3",
          label: "pipette",
          phonetics: "/paɪˈpet/, *UK /pɪˈpet/",
        },
      },
      // pipette
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pitri-dish.mp3",
          label: "pitri dish",
          phonetics: "/ˈpiː.tri ˌdɪʃ/",
        },
      },
    ],
  },
  // Body / Organs
  {
    label: "Body / Organs",
    words: [
      // bladder
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/b/bladder.mp3",
          label: "bladder",
          phonetics: "/ˈblæd.ɚ/",
        },
      },
    ],
  },
  // Anatomical structures
  {
    label: "Anatomical structures",
    words: [
      // lymph node
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/l/lymph-node.mp3",
          label: "lymph node",
          phonetics: "/ˈlɪmf ˌnoʊd/",
        },
      },
      // prostate
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/prostate.mp3",
          label: "prostaste",
          phonetics: "/ˈprɑː.steɪt/",
        },
      },
    ],
  },
  // Biological molecules
  {
    label: "Biological molecules",
    words: [
      // bladder
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/h/hemoglobin.mp3",
          label: "hemogloblin",
          phonetics: "/ˌhiː.məˈɡloʊ.bɪn/",
        },
      },
    ],
  },
  // Biological cells
  {
    label: "Biological cells",
    words: [
      // stem cell
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/s/stem-cell.mp3",
          label: "stem cell",
          phonetics: "/ˈstem ˌsel/",
        },
      },
    ],
  },
  // Medical events / complications
  {
    label: "Medical events / complications",
    words: [
      // miscarriage
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/m/miscarriage.mp3",
          label: "miscarriage",
          phonetics: "/ˈmɪsˌker.ɪdʒ/",
        },
      },
    ],
  },
  // Medical conditions and infections
  {
    label: "Medical conditions",
    words: [
      // carpal tunnel syndrome
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/c/carpal-tunnel-syndrome.mp3",
          label: "carpal tunnel syndrome",
          phonetics: "",
        },
      },
      // bladder stone
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/b/bladder-stones.mp3",
          label: "bladder stones",
          phonetics: "",
        },
      },
      // hemophilia
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/h/hemophilia.mp3",
          label: "hemophilia",
          phonetics: "/ˌhiː.məˈfɪl.i.ə/",
        },
      },
      // labyrinthitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/l/labyrinthitis.mp3",
          label: "labyrinthitis",
          phonetics: "/ˌlæb.ə.rɪnθˈaɪ.t̬əs/",
        },
      },
      // malignant
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/m/malignant.mp3",
          label: "malignant",
          phonetics: "/məˈlɪɡ.nənt/",
        },
      },
      // meningitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/m/meningitis.mp3",
          label: "meningitis",
          phonetics: "/ˌmen.ɪnˈdʒaɪ.t̬əs/",
        },
      },
      // meningitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/o/opportunistic-infections.mp3",
          label: "opportunistic-infections (Ols)",
          phonetics: "",
        },
      },
      // pharyngitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/pharyngitis.mp3",
          label: "pharyngitis",
          phonetics: "/ˌfer.ɪnˈdʒaɪ.t̬əs/",
        },
      },
      // polycystic ovary syndrome (PCOS)
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/p/polycystic-ovary-syndrome.mp3",
          label: "polycystic ovary syndrome (PCOS)",
          phonetics: "/ˌpɑːl.iˈsɪs.tɪk ˈoʊ.vər.i ˌsɪn.droʊm/",
        },
      },
      // rhinitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/r/rhinitis.mp3",
          label: "rhinitis",
          phonetics: "/raɪˈnaɪ.t̬əs/",
        },
      },
    ],
  },
  // Epidemiological terms
  {
    label: "Epidemiological terms",
    words: [
      // outbreak
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/o/outbreak.mp3",
          label: "outbreak",
          phonetics: "/ˈaʊt.breɪk/",
        },
      },
    ],
  },
  // Symptoms
  {
    label: "Symptoms",
    words: [
      {
        word: "I feel / I'm feeling...",
      },
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/d/dizziness.mp3",
          label: "dizziness",
          phonetics: "/ˈdɪz.i.nəs/",
        },
      },
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/n/numbness.mp3",
          label: "numbness",
          phonetics: "/.../",
        },
      },
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/t/tingling.mp3",
          label: "tingling",
          phonetics: "/.../",
        },
      },
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/w/weakness.mp3",
          label: "weakness",
          phonetics: "/.../",
        },
      },
    ],
  },
  {
    label: "Diseases / Genetic Disorder",
    words: [
      // conjunctivitis
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/c/conjunctivitis.mp3",
          label: "conjunctivitis",
          phonetics: "/kənˌdʒʌŋk.tɪˈvaɪ.t̬əs/",
        },
      },
      // pink eye
      {
        word: "popular name: pink eye",
      },
      // sickle-cell
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/s/sickle-cell.mp3",
          label: "sickle cell",
          phonetics: "/ˈsɪk.əl ˌsel/",
        },
      },
    ],
  },
  // Medical ethics
  {
    label: "Medical ethics",
    words: [
      // euthanasia
      {
        component: (props: MedicineVocabularyProps) => (
          <DictionaryCard {...props} />
        ),
        componentProps: {
          audioSrc: "/e/euthanasia.mp3",
          label: "euthanasia",
          phonetics: "/ˌjuː.θəˈneɪ.ʒə/",
        },
      },
    ],
  },
];

export default function MedicineVocabulary() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="medicine"
        descriptions={["Vocabulary"]}
      />
      <div className="line-break">
        <div className="flex-col-8px">
          {/* Map */}
          <div className="line-break">
            {items.map((item, labelIndex) => (
              <div key={labelIndex} className="line-break">
                <Card bgColor="black" textColor="white">
                  <p className="bold">{item.label}</p>
                </Card>
                <div className="flex-col-8px">
                  {item.words.map((word, wordIndex) => (
                    <div key={wordIndex}>
                      {word.word && <p>{word.word}</p>}
                      {word.component && (
                        <span>{word.component(word.componentProps)}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
