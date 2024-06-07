import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Image from "next/image";

import bladderCancer from "@/img/bladder-cancer.jpg";

export default function Vocabulary() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="medicine"
        descriptions={["Vocabulary"]}
      />
      <div className="line-break">
        <div className="flex-col-8px">
          {/* A */}

          {/* B */}
          <DictionaryCard audioSrc="/b/bladder.mp3" label="bladder" />
          <DictionaryCard
            audioSrc="/b/bladder-stones.mp3"
            label="bladder stones"
          />
          <Image
            src={bladderCancer}
            alt="Bladder cancer"
            className="img-border"
          />

          {/* C */}
          <DictionaryCard
            audioSrc="/c/carpal-tunnel-syndrome.mp3"
            label="carpal tunnel syndrome"
          />

          {/* D */}

          {/* E */}
          <DictionaryCard
            audioSrc=""
            label="embryology"
            phonetics="/ˌem.briˈɑː.lə.dʒi/"
          />
          <DictionaryCard
            audioSrc=""
            label="embryoscope"
            phonetics="/ˈem.bri.oʊ skoʊp/"
          />
          <DictionaryCard
            audioSrc=""
            label="endoscope"
            phonetics="/ˈen.doʊˌskoʊp/"
          />

          {/* F */}

          {/* G */}

          {/* H */}
          <DictionaryCard audioSrc="" label="gingivitis" phonetics="" />
          <p></p>
          <DictionaryCard
            audioSrc=""
            label="hemophilia"
            phonetics="/ˌhiː.məˈfɪl.i.ə/"
          />
          <DictionaryCard audioSrc="" label="hemoglobin" phonetics="" />

          {/* I */}

          {/* J */}

          {/* K */}

          {/* L */}
          <DictionaryCard
            audioSrc=""
            label="labyrinthitis"
            phonetics="/ˌlæb.ə.rɪnθˈaɪ.t̬əs/"
          />
          <DictionaryCard
            audioSrc=""
            label="lymph node"
            phonetics="/ˈlɪmf ˌnoʊd/"
          />

          {/* M */}
          <p>MS flare up (Multiple Sclerosis)</p>
          <DictionaryCard
            audioSrc=""
            label="malignant"
            phonetics="/məˈlɪɡ.nənt/"
          />
          <DictionaryCard
            audioSrc=""
            label="meningitis"
            phonetics="/ˌmen.ɪnˈdʒaɪ.t̬əs/"
          />
          <DictionaryCard
            audioSrc=""
            label="miscarriage"
            phonetics="/ˈmɪsˌker.ɪdʒ/"
          />

          {/* N */}

          {/* O */}

          {/* P */}
          <DictionaryCard audioSrc="" label="pharyngitis" phonetics="" />
          <DictionaryCard audioSrc="" label="pipette" phonetics="/paɪˈpet/" />

          
          
          <p>Opportunistic Infections (Ols)</p>
          <DictionaryCard label="pacemaker" audioSrc="" />
          <DictionaryCard audioSrc="" label="petri dish" />
          <DictionaryCard
            audioSrc=""
            label="polycystic ovary syndrome (PCOS)"
            phonetics="/ˌpɑːl.iˈsɪs.tɪk ˈoʊ.vər.i ˌsɪn.droʊm/
"
          />
          <DictionaryCard
            audioSrc=""
            label="prostate (cancer)"
            phonetics="/ˈprɑː.steɪt/"
          />
          <DictionaryCard
            audioSrc=""
            label="sick leave"
            phonetics="/ˈsɪk ˌliːv/"
          />
          <DictionaryCard
            audioSrc=""
            label="sickle cell"
            phonetics="/ˈsɪk.əl ˌsel/"
          />
          <DictionaryCard
            audioSrc=""
            label="pacemaker"
            phonetics="/ˈpeɪsˌmeɪ·kər/"
          />
          <DictionaryCard
            audioSrc=""
            label="stem cell"
            phonetics="/ˈstem ˌsel/"
          />
          <DictionaryCard
            audioSrc=""
            label="rhinitis"
            phonetics="/raɪˈnaɪ.t̬əs/"
          />
        </div>
      </div>
    </>
  );
}
