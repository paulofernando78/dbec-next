import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Workout() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Workout" />
      <div className="line-break">
        <p><b>Vocabulary</b></p>
        <div>
          <p>aerobics /erˈoʊ.bɪks/</p>
          <p>jump rope</p>
          <p>treadmill (tread: pisar em algo)</p>
        </div>
        <div>
          <p>biceps /ˈbaɪ.sep/</p>
          <p>tricep /ˈtraɪ.sep/</p>
        </div>
          <div>
            <p>lift weight</p>
            <p>chest press</p>
            <p>dumbell</p>
          </div>
          <div>
            <p>The metabolism slows down.</p>
            <p>go on a diet</p>
          </div>
      </div>
    </>
  );
}
