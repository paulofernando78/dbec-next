import { AudioPlayer, Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subTitle="Business"
        descriptions={[
          "Business MEetings (US)",
          "Lesson 1 • Starting a Meeting",
        ]}
      />
      <div className="line-break">
        <AudioPlayer audioSrc="/assets/audio/specific-purposes/business/business-meetings-us/english-for-business-meetings-lesson-1-formal.mp3" />
        <p>
          <b>Meeting A - Formal</b>
        </p>
        <p>
          <b>Alex:</b> <b>On behalf of</b> Vision Corporation, I’d like to call
          this meeting to order. This is a meeting of some of the key players in
          our company: our top managers. Our purpose this morning is to hear a
          presentation about a new initiative for <b>outreach</b> and marketing,
          and to discuss this plan with all of you.
        </p>
        <p>
          This is a presentation that all of us have <b>looked forward to</b>.
          This
          <b>initiative</b> marks a new <b>milestone</b> in the evolution of our
          company. First, it serves as an <b>assessment</b> of where our company
          is now in terms of communicating its message to its customers
          domestically and abroad.
          <b>Furthermore</b>, this plan has the potential to drive our company
          forward by transforming our corporate <b>outreach</b> and marketing
          strategies.
        </p>
        <p>
          We are <b>delighted</b> that all of the major contributors to this
          initiative are here today. They will use their unique perspectives to
          talk about the <b>current state of affairs</b> in terms of outreach
          and marketing, give details about the new proposed initiative, and
          outline the path for implementation.
        </p>
        <hr />
        <AudioPlayer audioSrc="/assets/audio/specific-purposes/business/business-meetings-us/english-for-business-meetings-lesson-1-informal.mp3" />
        <p>
          <b>Meeting b - Informal</b>
        </p>
        <p>
          <b>Alex:</b> Okay, everybody. Please take a seat. Let’s get started.
          I’ve called this meeting of our top salespeople so that all of you get
          a chance to hear about the new plan to get our company out there in
          order to reach more of our potential market. First, we’ll hear a
          presentation from the team that{" "}
          <span className="underline">has been working on</span> this. Then,
          we’ll discuss it to get your feedback and put our heads together to
          see if there are any other ideas.
        </p>
        <p>
          While the team is getting set up, let me say a few words. What does
          this new plan mean for our company? First, it’s a <b>reality check</b>{" "}
          on where we are right now in terms of getting our message to our
          customers. Second, this plan has the potential to move the company
          <b>forward</b>. One of our main challenges, as you all know, is staying
          relevant in this changing market. Today’s presentation has some really
          innovative ideas about how we can do this.
        </p>
      </div>
    </>
  );
}
