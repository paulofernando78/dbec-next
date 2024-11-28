import { Card } from "@/components";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function SoocerFootball() {
  return (
    <>
      <Whiteboard
        title="Specific-Purposes"
        subtitle="Sports"
        descriptions={["Soccer / Football"]}
      />
      <div className="line-break">
        <div>
          <p className="bold">Brazilian ...</p>
        </div>
        <div className="line-break">
          <p className="bold">
            The Union European Football Associations (UEFA)
          </p>
          <div className="line-break">
            <p className="bold">Countries</p>
            <p>Albania</p>
            <p>Andorra</p>
            <p>Armenia</p>
            <p>Austria</p>
            <p>Azerbaijan</p>
            <p>Belarus</p>
            <p>Belguim</p>
            <p>Bosnia and Herzegovina</p>
            <p>Bulgaria</p>
            <p>Crotia</p>
            <p>Cyprus</p>
            <p>Czech Republic</p>
            <p>Denmark</p>
            <p>England</p>
            <p>Estonia</p>
            <p>Faroe Islands</p>
            <p>Finland</p>
            <p>France</p>
            <p>Georgia</p>
            <Card>
              <p className="bold">Germany (13 clubs)</p>
              <p>Bayer</p>
              <p>Dortmund</p>
              <p>Leipzig</p>
              <p>Leverkusen</p>
              <p>Schalke</p>
              <p>Mönchengladbach</p>
              <p>Eintracht Frankfurt</p>
              <p>Hoffenheim</p>
              <p>Wolfsburg</p>
              <p>Hertha</p>
              <p>Köin</p>
              <p>Freiburg</p>
              <p>Mainz</p>
            </Card>
            <p>Gibraltar</p>
            <p>Greece</p>
            <p>Hungary</p>
            <p>Iceland</p>
            <p>Israel</p>
            <p>Italy</p>
            <p>Kazakhstan</p>
            <p>Kosovo</p>
            <p>Latvia</p>
            <p>Liechtenstein</p>
            <p>Lithuania</p>
            <p>Luxembourg</p>
            <p>Malta</p>
            <p>Moldova</p>
            <p>Montenegro</p>
            <p>Netherlands</p>
            <p>North Macedonia</p>
            <p>Northern Ireland</p>
            <p>Norway</p>
            <p>Poland</p>
            <p>Portugal</p>
            <p>Republic of Ireland</p>
            <p>Romania</p>
            <p>Russia</p>
            <p>San Marino</p>
            <p>Scotland</p>
            <p>Serbia</p>
            <p>Slovakia</p>
            <p>Slovenia</p>
            <p>Spain</p>
            <p>Sweden</p>
            <p>Switzerland</p>
            <p>Turkey</p>
            <p>Ukraine</p>
            <p>Wales</p>
          </div>
        </div>
      </div>
    </>
  );
}
