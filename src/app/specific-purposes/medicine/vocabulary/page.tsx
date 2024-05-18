import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Vocabulary() {
  return (
    <>
      <Whiteboard title="Specific Purposes" />
      <div className="line-break">
        <div>
            <p>embryoscope</p>
            <p>hemophilia</p>
            <p>hemoglobin</p>
            <p>Lymph nodes</p>
            <p>
              Malignant <span className="phonetics">/məˈlɪɡ.nənt/</span>
            </p>
            <p>Opportunistic Infections (Ols)</p>
            <p>Polycystic Ovary Syndrome (PCOS)</p>
            <p>prostate (cancer)</p>
            <p>sickle cell disease</p>
        </div>
      </div>
    </>
  );
}
