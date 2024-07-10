import { AudioPlayer } from "@/components/Audioplayer";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function History() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="History" />
      <div className="line-break">
        <div className="line-break">
          <p className="bold">World War II</p>
          <p>Unit 731</p>
          <div>
            <p>
              The North Atlantic Treaty Organization, also called the North
              Atlantic Alliance, is an intergovernmental military alliance of 32
              member states—30 European and 2 North American.
            </p>
            <p>
              <b>Founded:</b> April 4, 1949, Washington, D.C., United States
            </p>
            <p>
              <b>Founders:</b> United States, France, United Kingdom, Italy,
              Canada, MORE
            </p>
          </div>
          <p>V2 Rocket (Wernher Von Brauner)</p>
          <p>
            Did the V-2 rocket ever work? V-2 Missile | National Air and Space
            Museum The V-2 was to be an even more decisive terror weapon, but
            the rocket was neither accurate, reliable, nor cost effective. On 7
            September 1944 the first two operational rockets were fired against
            Paris, but both failed due to premature cutoffs.
          </p>
        </div>
        <p>Gold Rush (1848 - 1855)</p>
        <div>
          <p>John VI (John the sixth)</p>
          <p>Peter I (Peter the first)</p>
          <p>Peter II (Peter the second)</p>
        </div>
        <div>
          <p>Charles III</p>
        </div>
        <AudioPlayer audioSrc="/assets/audio/specific-purposes/history/difference-between-right-legt-wing.mp3"/>
        <p>What is the difference between right-wing and left-wing?</p>


        <p>Generally, the left wing is characterized by an emphasis on "ideas such as freedom, equality, fraternity, rights, progress, reform and internationalism" while the right wing is characterized by an emphasis on "notions such as authority, hierarchy, order, duty, tradition, reaction and nationalism".</p>
      </div>
    </>
  );
}
