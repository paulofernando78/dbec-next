import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Card } from "@/components/Card/Card";
import { numbers } from "./teste";

// const numbers = [
//   {
//     audio: "/assets/audio/welcomespecific-purposes/resumao/1-10.mp3",
//     numberBold: "1-10",
//     figures: [
//       {
//         cardinalNumber: "1 one",
//         ordinalNumber: "1th first",
//       },
//       {
//         cardinalNumber: "2 two",
//         ordinalNumber: "2nd second",
//       },
//       {
//         cardinalNumber: "3 three",
//         ordinalNumber: "3rd third",
//       },
//     ],
//   },
//   {
//     audio: "/assets/audio/welcomespecific-purposes/resumao/",
//     numberBold: "11-20",
//     figures: [
//       {
//         cardinalNumber: "11 eleventh",
//         ordinalNumber: "11th first",
//       },
//     ],
//   },
// ];

export default function CardinalOrdinalNumbers() {
  return (
    <>
      <Card bgColor="black" textColor="white">
        <span className="bold">Numbers</span>
      </Card>
      <div className="line-break">
        {numbers.map((number, numberIndex) => (
          <div key={numberIndex}>
            <AudioPlayer audioSrc={number.audio} />
            <p className="bold">{number.numberBold}</p>
            {number.figures.map((figure, figureIndex) => (
              <div key={figureIndex}>
                <p>
                  {figure.cardinalNumber} • {figure.ordinalNumber}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
