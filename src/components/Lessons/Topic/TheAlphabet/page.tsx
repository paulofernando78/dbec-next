import { Card } from "@/components/Cards/Card";

interface Alphabet {
  audioSrc: string;
  number: string;
  letter: string;
  phonetics: string
}

const alphabets: Alphabet[] = [
  {
    number: "1",
    letter: "A",
    audioSrc: "/a/a1.mp3",
    phonetics: "/eɪ/"
  },
  {
    number: "2",
    letter: "B",
    audioSrc: "/b/b1.mp3",
    phonetics: "/biː/"
  },
  {
    number: "3",
    letter: "C",
    audioSrc: "/c/c1.mp3",
    phonetics: "/siː/"
  },
  {
    number: "4",
    letter: "D",
    audioSrc: "/d/d1.mp3",
    phonetics: "/diː/"
  },
  {
    number: "5",
    letter: "E",
    audioSrc: "/e/e1.mp3",
    phonetics: "/iː/"
  },
  {
    number: "6",
    letter: "F",
    audioSrc: "/f/f1.mp3",
    phonetics: "/ef/"
  },
  {
    number: "7",
    letter: "G",
    audioSrc: "/g/g1.mp3",
    phonetics: "/dʒiː/"
  },
  {
    number: "8",
    letter: "H",
    audioSrc: "/h/h1.mp3",
    phonetics: "/eɪtʃ/"
  },
  {
    number: "9",
    letter: "I",
    audioSrc: "/i/i1.mp3",
    phonetics: "/eɪtʃ/"
  },
  {
    number: "10",
    letter: "J",
    audioSrc: "/j/j1.mp3",
    phonetics: "/dʒeɪ/"
  },
  {
    number: "11",
    letter: "K",
    audioSrc: "/k/k1.mp3",
    phonetics: "/keɪ/"
  },
  {
    number: "12",
    letter: "L",
    audioSrc: "/l/l1.mp3",
    phonetics: "/el/"
  },
  {
    number: "13",
    letter: "M",
    audioSrc: "/m/m1.mp3",
    phonetics: "/em/"
  },
  {
    number: "14",
    letter: "N",
    audioSrc: "/n/n1.mp3",
    phonetics: "/en/"
  },
  {
    number: "15",
    letter: "O",
    audioSrc: "/o/o1.mp3",
    phonetics: "/oʊ/"
  },
  {
    number: "16",
    letter: "P",
    audioSrc: "/p/p1.mp3",
    phonetics: "/piː/"
  },
  {
    number: "17",
    letter: "Q",
    audioSrc: "/q/q1.mp3",
    phonetics: "/kjuː/"
  },
  {
    number: "18",
    letter: "R",
    audioSrc: "/r/r1.mp3",
    phonetics: "/ɑːr/"
  },
  {
    number: "19",
    letter: "S",
    audioSrc: "/s/s1.mp3",
    phonetics: "/es/"
  },
  {
    number: "20",
    letter: "T",
    audioSrc: "/t/t1.mp3",
    phonetics: "/tiː/"
  },
  {
    number: "21",
    letter: "U",
    audioSrc: "/u/u1.mp3",
    phonetics: "/juː/"
  },
  {
    number: "22",
    letter: "V",
    audioSrc: "/v/v1.mp3",
    phonetics: "/viː/"
  },
  {
    number: "23",
    letter: "W",
    audioSrc: "/w/w1.mp3",
    phonetics: "/ˈdʌb.əl.juː/"
  },
  {
    number: "24",
    letter: "X",
    audioSrc: "/x/x1.mp3",
    phonetics: "/eks/"
  },
  {
    number: "25",
    letter: "Y",
    audioSrc: "/y/y1.mp3",
    phonetics: "/waɪ/"
  },
  {
    number: "26",
    letter: "Z",
    audioSrc: "/z/z1.mp3",
    phonetics: "/ziː/"
  },
];

const AudioSrcBase = "/assets/audio/dictionary";

function playAudio(audioSrc: string) {
  const audio = new Audio(AudioSrcBase + audioSrc);
  audio.play();
}

export default function TheAlphabet() {
  return (
    <>
      <Card bgColor="black" textColor="white">
        <p className="bold">The Alphabet</p>
      </Card>
      <div>
          <p>There are 26 (twenty-six) letters in the English alphabet.</p>
          <p>Click / Tap to listen.</p>
      </div>
      <div className="grid-repeat-auto-fit-110px-justify">
        {alphabets.map((alphabet, index) => (
          <div
            className="flex-col img-border cursor-pointer"
            key={index}
            onClick={() => playAudio(alphabet.audioSrc)}
          >
            <span className="p-size-smaller">{alphabet.number}</span>
            <p className="bold">{alphabet.letter}</p>
            <p className="phonetics">{alphabet.phonetics}</p>
          </div>
        ))}
      </div>
    </>
  );
}
