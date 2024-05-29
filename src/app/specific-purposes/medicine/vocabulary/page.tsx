import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Image from "next/image";

import bladderCancer from "@/img/bladder-cancer.jpg"
  

export default function Vocabulary() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="medicine" descriptions={["Vocabulary"]}/>
      <div className="line-break">
        <div className="flex-col-8px">
          <DictionaryCard audioSrc="/b/bladder.mp3" label="bladder" />
          <DictionaryCard audioSrc="/b/bladder-stones.mp3" label="bladder stones" />
          <Image src={bladderCancer} alt="Bladder cancer" className="img-border"/>
          <DictionaryCard audioSrc="/c/carpal-tunnel-syndrome.mp3" label="carpal tunnel syndrome"/>
            <p>embryoscope</p>
            <p>pharyngitis</p>
            <p>gingivitis</p>
            <p>hemophilia</p>
            <p>hemoglobin</p>
            <DictionaryCard audioSrc="" label="labyrinthitis"/>
            <p>Lymph nodes</p>
            <p>MS flare up (Multiple Sclerosis)</p>
            <p>
              Malignant <span className="phonetics">/məˈlɪɡ.nənt/</span>
            </p>
            <p>meningitis</p>
            <p>Opportunistic Infections (Ols)</p>
            <DictionaryCard label="pacemaker" audioSrc="" />
            <DictionaryCard audioSrc="" label="petri dish"/>
            <p>Polycystic Ovary Syndrome (PCOS)</p>
            <p>prostate (cancer)</p>
            <DictionaryCard audioSrc="" label="sick leave" />
            <p>sickle cell disease</p>
            <p>pacemaker (a small, battery-powered device that prevents the heart from beating too slowly = um pequeno dispositivo alimentado por bateria que impede o coração de bater muito devagar)</p>
            <p>rhinitis</p>
        </div>
      </div>
    </>
  );
}
