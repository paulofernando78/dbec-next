import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const radio = [
  {
    title: "<b>1. Choose the correct answer.</b>",
    subtitle: "1. Question",
    options: [
      {
        label: "Answer 1",
        isCorrect: true,
      },
      {
        label: "Answer 2",
        isCorrect: false,
      },
    ],
  },
  {
    subtitle: "2. Question",
    options: [
      {
        label: "Answer 1",
        isCorrect: true,
      },
      {
        label: "Answer 2",
        isCorrect: false,
      },
    ],
  },
];

export default function Mocks() {
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // if (!isClient) return "Loading"

  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <Card>
          <b>Audio Player</b>
        </Card>
        <AudioPlayer audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" />
        <Card>
          <b>Radio</b>
        </Card>
        <Radio questions={radio} />
        <Card>
          <b>Checkbox</b>
        </Card>
        <Card>
          <b>Dropdown</b>
        </Card>
        <Card>
          <b>Fill in The Blanks</b>
        </Card>
        <Card>
          <b>Dictionary Card</b>
        </Card>

        <p>
          I'm feeling <DictionaryCard audioSrc="/g/good.mp3" label="good" />{" "}
          today.
        </p>
      </div>
    </div>
  );
}
