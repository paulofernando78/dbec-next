import { Card } from "@/components/Card/Card";
import HowYouFeeling from "@/components/HowYouFeeling/HowYouFeeling";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Home() {
  return (
    <main>
      <Whiteboard title="Dashboard" />
      <div className="line-break">
        <Card>
          <div className="line-break">
            <h2>Welcome to Daily Basis English Course</h2>
            <p>
              <b>
                Hi! Welcome to your student&apos;s website. Here, you&apos;ll find a
                lot of interesting materials. Please, use it wisely.
              </b>
            </p>
          </div>
        </Card>
        <HowYouFeeling />
        <textarea className="textarea"></textarea>
        <Card>
          <p>...</p>
        </Card>
      </div>
    </main>
  );
}
