import { Card } from "@/components/Card/Card";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Home() {
  return (
    <main>
      <Whiteboard
      title="Dashboard"
      subtitle="aaa"
      descriptions={["aaa"]}
      />
      <div className="line-break">
        <h2>Welcome to Daily Basis English Course</h2>
        <p>
            <b>
              Hi! Welcome to your student&apos;s website. Here, you&apos;ll find a lot of interesting materials. Please, use it wisely.
            </b>
          </p>
        <div>
          <h2>How are you feeling today?</h2>
        </div>
        <Card>
          <p>Teste!</p>
        </Card>
      </div>
    </main>
  );
}
