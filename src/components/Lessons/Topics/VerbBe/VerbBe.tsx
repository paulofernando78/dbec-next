import { BoardCard } from "@/components/Cards/BoardCard";
import React from "react";

export const VerbBe = () => {
  return (
    <BoardCard label="Verb to be" bgColor="black" textColor="white">
      <BoardCard label="Positive" bgColor="black" textColor="white">
        <div>
          <p className="bold"></p>
          <p>I <b>am</b> (I<b>'m</b>)</p>
          <p>you <b>are</b> (you<b>'re</b>)</p>
          <p>he <b>is</b> (he<b>'s</b>)</p>
          <p>she <b>is</b> (she<b>'s</b>)</p>
          <p>it <b>is</b> (it<b>'s</b>)</p>
          <p>we <b>are</b> (we<b>'re</b>)</p>
          <p>you <b>are</b> (you<b>'re</b>)</p>
          <p>they <b>are</b> (they<b>'re</b>)</p>
        </div>
      </BoardCard>
      <BoardCard label="Negative" bgColor="black" textColor="white">
        <div>
            <p>I <b>am not</b> (I<b>'m not</b>)</p>
            <p>you <b>are not</b> (you<b>'re not</b> / you <b>aren't</b>)</p>
            <p>he <b>is not</b> (he<b>'s not</b> / he <b>isn't</b>)</p>
            <p>she <b>is not</b> (she<b>'s not</b> / she <b>isn't</b>)</p>
            <p>it <b>is not</b> (it<b>'s not</b> / it <b>isn't</b>)</p>
            <p>we <b>are not</b> (we<b>'re not</b> / we <b>aren't</b>)</p>
            <p>you <b>are not</b> (you<b>'re not</b> / you <b>aren't</b>)</p>
            <p>they <b>are not</b> (they<b>'re not</b> / they <b>aren't</b>)</p>
        </div>
      </BoardCard>
      <BoardCard label="Question" bgColor="black" textColor="white">
        <div>
            <p>
              <b>A:</b> Where <b>Am</b> I? <b>B:</b> You're in a hospital.
            </p>
            <p><b>Are</b> you John? No, I'm Mike.</p>
            <p><b>Is</b> he your friend?</p>
            <p><b>Is</b> she your girlfriend?</p>
            <p><b>Is</b> it interesting? *it = movie</p>
            <p><b>Are</b> we on the right path?</p>
            <p><b>Are</b> you the teachers?</p>
            <p><b>Are</b> they German?</p>
        </div>
      </BoardCard>
      <BoardCard label="Question + Negative" bgColor="black" textColor="white">
        <div>
            <p><b>Aren't</b> you John?</p>
            <p><b>Isn't</b> he your friend?</p>
        </div>
      </BoardCard>
    </BoardCard>
  );
};
