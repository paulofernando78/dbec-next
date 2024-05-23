"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

import styles from "./food-drink.module.css";
import { Collapsible } from "@/components/Collapsible/Collapsible";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function FoodDrink() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Food / Drink" />
      <div className="line-break">
        <div className="line-break">
          <Card bgColor="black" textColor="white">
            <span className="bold">Fruit</span>
          </Card>
          <div className={styles["flex"]}>
            <DictionaryCard label="apple" phonetics="" audioSrc="/" />
            <DictionaryCard
              label="plantain"
              phonetics=""
              audioSrc="/p/plantain.mp3"
            />
            <DictionaryCard label="strawberry" phonetics="" audioSrc="/" />
          </div>
        </div>
        <div className="line-break">
          <Card bgColor="black" textColor="white">
            <span className="bold">Vegetables</span>
          </Card>
          <div className={styles["flex"]}>
            <DictionaryCard
              label="broccoli"
              phonetics="/ˈbrɑː.kəl.i/"
              audioSrc="/"
            />
            <DictionaryCard
              label="cucumber"
              phonetics="/ˈkjuː.kʌm.bɚ/"
              audioSrc="/"
            />
            <DictionaryCard
              label="cauliflower"
              phonetics="/ˈkɑː.ləˌflaʊ.ɚ/"
              audioSrc="/"
            />
            <DictionaryCard label="kale" phonetics="/keɪl/" audioSrc="/" />
          </div>
          <Card bgColor="black" textColor="white">
            <span className="bold">Meat</span>
          </Card>
          <div className="line-break">
            <DictionaryCard audioSrc="" label="minced meat" />
            <Collapsible labelBold="What's the difference between 'minced meat' and ground meat'?">
              <div className="line-break">
                <p>
                  <span className="bold">Minced meat</span> is meat that has
                  been very finely chopped. In some countries, it can also be
                  put through a meat grinder, but without any additional
                  ingredients – meat only.
                </p>
                <p>
                  There are also large machines with very sharp blades that
                  repeatedly chop the meat into very small pieces. Consequently,
                  it has a courser texture than ground meat.
                </p>
                <hr />
                <p>
                  <span className="bold">Ground meat</span> is made from meat
                  with additional ingredients that are put through a meat
                  grinder.
                </p>
                <p>
                  Like products such as sausage, ground meat also very often
                  contains other ingredients, so it is not 100% beef, lamb or
                  pork, etc. These ingredients include mostly water, soy, or
                  excessive fat from other animals.
                </p>
              </div>
            </Collapsible>
          </div>

          <div>
            <p>A table for 2, 3, 4, etc.</p>
            <p>Can I have the menu?</p>
            <p>Can I have the check, please? formal Check, please! informal</p>
            <p>May I take your order?</p>
            <p>I'm starving (to death)</p>
            <p>I'll have chicken salad.</p>
          </div>
          <div>
            <DictionaryCard audioSrc="" label="iced-cold beer" />
            <DictionaryCard audioSrc="" label="sparking water" />
          </div>
          <div></div>
          <ScrollToTop />
        </div>
      </div>
    </>
  );
}
