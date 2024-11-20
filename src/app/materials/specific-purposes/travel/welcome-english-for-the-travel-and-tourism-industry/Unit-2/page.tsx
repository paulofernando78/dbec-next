import { Whiteboard } from "@/components/Whiteboard";

export default function Unit2() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 2 • Being friendly and helpful"]}
      />
      <div className="line-break">
        <p>
          <b>
            Work in groups. Find out about the last time your partners went to a
            restaurant, a café and a shop. Discuss these questions.
          </b>
        </p>
        <div>
          <p>• How helpful and friendly were the staff?</p>
          <p>
            • What did the staff do to make you feel welcome? What did they say
            to you?
          </p>
          <p>• Would you recommend each place to a friend? Why / Why not?</p>
        </div>
        <p>
          You'll hear three conversations. Listen and decide which of the people
          in the photos sounds unfriendly and unhelpful.
        </p>
      </div>
    </>
  );
}
