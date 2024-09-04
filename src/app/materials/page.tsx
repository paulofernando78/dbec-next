import { DashboardNotes } from "@/components/DashboardNotes/DashboardNotes";
import HowYouFeeling from "@/components/HowYouFeeling/HowYouFeeling";
import { Welcome } from "@/components/Welcome";
import { Whiteboard } from "@/components/Whiteboard";

export default function Material() {
  return (
    <>
      <Whiteboard title="Dashboard" />
      <div className="line-break">
        <Welcome />
        <HowYouFeeling />
        <DashboardNotes />
      </div>
    </>
  );
}
