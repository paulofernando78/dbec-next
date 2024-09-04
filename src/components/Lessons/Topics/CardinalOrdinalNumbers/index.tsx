import { BoardCard } from "@/components/Cards/BoardCard";
import { AudioPlayer } from "@/components/Audioplayer";

// import { birthday1 } from "@/audio/index";

export const CardinalOrdinalNumbers = () => {
  return (
    <BoardCard
      label="Cardinal and ordinal numbers"
      bgColor="black"
      textColor="white"
    >
      <BoardCard label="1-10" bgColor="lightgray">
        <div>
          <p>
            1 one • 1<sup>st</sup> fir<span className="underline">st</span>
          </p>
          <p>
            2 one • 2<sup>nd</sup> seco<span className="underline">nd</span>
          </p>
          <p>
            3 one • 3<sup>rd</sup> thi<span className="underline">rd</span>
          </p>
          <p>
            4 one • 4<sup>th</sup> four<span className="underline">th</span>
          </p>
          <p>
            5 one • 5<sup>th</sup> fif<span className="underline">th</span>
          </p>
          <p>
            6 one • 6<sup>th</sup> six<span className="underline">th</span>
          </p>
          <p>
            7 one • 7<sup>th</sup> seven<span className="underline">th</span>
          </p>
          <p>
            8 one • 8<sup>th</sup> eigh<span className="underline">th</span>
          </p>
          <p>
            9 one • 9<sup>th</sup> nin<span className="underline">th</span>
          </p>
          <p>
            10 one • 10<sup>th</sup> ten<span className="underline">th</span>
          </p>
        </div>
      </BoardCard>
      <BoardCard label="11-31" bgColor="lightgray">
        <div>
          <p>
            11 eleven • 11<sup>st</sup> eleven
            <span className="underline">th</span>
          </p>
          <p>
            12 twelve • 12<sup>nd</sup> twelf
            <span className="underline">th</span>
          </p>
          <p>
            13 thirteen • 13<sup>rd</sup> thirteen
            <span className="underline">th</span>
          </p>
          <p>
            14 fourteen • 14<sup>th</sup> fourteen
            <span className="underline">th</span>
          </p>
          <p>
            15 fifteen • 15<sup>th</sup> fifteen
            <span className="underline">th</span>
          </p>
          <p>
            16 sixteen • 16<sup>th</sup> sixteen
            <span className="underline">th</span>
          </p>
          <p>
            17 seventeen • 17<sup>th</sup> seventeen
            <span className="underline">th</span>
          </p>
          <p>
            18 eighteen • 18<sup>th</sup> eighteen
            <span className="underline">th</span>
          </p>
          <p>
            19 nineteen • 19<sup>th</sup> nineteen
            <span className="underline">th</span>
          </p>
          <p>
            20 twenty • 20<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            21 twenty-one • 21<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            22 twenty-two • 22<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            23 twenty-three • 23<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            24 twenty-four • 24<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            25 twenty-five • 25<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            26 twenty-six • 26<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            27 twenty-seven • 27<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            28 twenty-eight • 28<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            29 twenty-nine • 29<sup>th</sup> twent
            <span className="underline">ieth</span>
          </p>
          <p>
            30 thirty • 30<sup>th</sup> thirt
            <span className="underline">ieth</span>
          </p>
          <p>
            31 thirty-one • 31<sup>st</sup> thirty-fir
            <span className="underline">st</span>
          </p>
        </div>
        <BoardCard label="Examples" bgColor="lightgrey">
          <div className="line-break">
            <div>
              <AudioPlayer audioSrc="/assets/audio/specific-purposes/all-in-one/CardinalOrdinalNumbers/birthday1.mp3" />
              <p>
                When's your birthday?{" "}
                <span className="portuguese">Quando é o seu aniversário?</span>
              </p>
              <p>
                (My birthday's on) January 7.{" "}
                <span className="portuguese">
                  (Meu aniversário é no dia) 7 de Janeiro.
                </span>
              </p>
            </div>
            <div>
              <AudioPlayer audioSrc="" />
              <p>
                When were you born?{" "}
                <span className="portuguese">Quando você nasceu?</span>
              </p>
              <p>
                (I was born on) January 7, 1978.
                <span className="portuguese">
                  {" "}
                  (Eu nasci no dia) 7 de Janeiro de 1978.
                </span>
              </p>
            </div>
            <div>
              <AudioPlayer audioSrc="" />
              <p>
                What's your date of birth?{" "}
                <span className="portuguese">
                  Qual a data do seu nascimento?
                </span>
              </p>
              <p>
                My date of birth is January 7, 1978.
                <span className="portuguese">
                  {" "}
                  (A data do meu nascimento é) 7 de Janeiro de 1978.
                </span>
              </p>
            </div>
          </div>
        </BoardCard>
      </BoardCard>
    </BoardCard>
  );
};
