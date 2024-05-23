import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Vocabulary() {
  return (
    <>
      <Whiteboard title="Specific Purposes" />
      <div className="line-break">
        <div>
            <p>Carpal tunnel syndrome</p>
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
            <p>Polycystic Ovary Syndrome (PCOS)</p>
            <p>prostate (cancer)</p>
            <p>sickle cell disease</p>
            <p>pacemaker (a small, battery-powered device that prevents the heart from beating too slowly = um pequeno dispositivo alimentado por bateria que impede o coração de bater muito devagar)</p>
            <p>rhinitis</p>
        </div>
      </div>
    </>
  );
}
