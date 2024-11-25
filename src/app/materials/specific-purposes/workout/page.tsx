import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Workout() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Workout" />
      <div className="line-break">
        <p>
          <b>Vocabulary</b>
        </p>
        <div>
          <p>aerobics /erˈoʊ.bɪks/</p>
          <p>jump rope</p>
          <p>treadmill [esteira] (tread: pisar em algo)</p>
          <p>How about running outdoors?</p>
        </div>
        <div>
          <p>lift weight</p>
          <p>dumbell</p>
        </div>
        <div>
          <p className="bold">What's your training program?</p>
          <p>biceps /ˈbaɪ.sep/</p>
          <p>triceps /ˈtraɪ.sep/</p>
          <p>chest press</p>
        </div>
        <div>
          <p>The metabolism slows down.</p>
          <p>go on a diet</p>
          <p>belly</p>
          <p>I haven't eaten / drunk / consumed... since...</p>
          <p>cut down = reduce</p>
          <p>I've cut down on sugar.</p>
          <p>
            It's isn't an easy thing to do. We crave on sugar once in a while.
          </p>
        </div>
      </div>
    </>
  );
}
