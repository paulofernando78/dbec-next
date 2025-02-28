"use client";
import Link from "next/link";
import { Whiteboard, DictionaryCard } from "@/components/index";
import { ScrollToTop } from "@/components/Atoms/ScrollToTop/ScrollToTop";
import { Collapsible } from "@/components/Atoms/Collapsibles/Collapsible";

export default function FoodAndDrink() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Food / Drink" />
      <div className="line-break">
        <div className="line-break">
          <span className="font-bold">Verbs</span>
          <DictionaryCard word="husk" audioSrc="/h/husk.mp3" />
          <p>We can husk apple's seed.</p>
          <DictionaryCard word="peel" audioSrc="/p/peel.mp3" />
          <p>We can peel apples, bananas, potatos, tomatos, carrots, etc.</p>
          <span className="font-bold">Fruit</span>
          <div className="flex-col">
            <DictionaryCard word="apple" audioSrc="/a/apple.mp3" />
            <DictionaryCard audioSrc="/c/caper.mp3" word="caper" />

            <DictionaryCard word="plantain" audioSrc="/p/plantain.mp3" />
            <DictionaryCard word="strawberry" audioSrc="/s/strawberry.mp3" />
          </div>
        </div>
        <span className="font-bold">Seed</span>
        <div className="flex-col">
          <DictionaryCard audioSrc="/c/chia.mp3" word="chia" />
          <DictionaryCard audioSrc="/f/flaxseed.mp3" word="flaxseed" />
        </div>
        <div className="line-break">
          <span className="font-bold">Vegetables</span>
          <div className="flex-col">
            <DictionaryCard audioSrc="/b/broccoli.mp3" word="broccoli" />
            <DictionaryCard
              audioSrc="/b/brussels-sprout.mp3"
              word="brussels sprout"
            />
            <DictionaryCard audioSrc="/c/cucumber.mp3" word="cucumber" />
            <DictionaryCard audioSrc="/c/cauliflower.mp3" word="cauliflower" />
            <DictionaryCard audioSrc="/k/kale.mp3" word="kale" />
          </div>
          <span className="font-bold">Cheese</span>
          <p>Casu Marzu</p>
          <span className="font-bold">Meat</span>
          <div className="line-break">
            <DictionaryCard audioSrc="/m/minced-meat.mp3" word="minced meat" />
            <Collapsible label="What's the difference between 'minced meat' and 'ground meat'?">
              <div className="line-break">
                <p>
                  <span className="font-bold">Minced meat</span> is meat that
                  has been very finely chopped. In some countries, it can also
                  be put through a meat grinder, but without any additional
                  ingredients – meat only.
                </p>
                <p>
                  There are also large machines with very sharp blades that
                  repeatedly chop the meat into very small pieces. Consequently,
                  it has a courser texture than ground meat.
                </p>
                <hr />
                <p>
                  <span className="font-bold">Ground meat</span> is made from
                  meat with additional ingredients that are put through a meat
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
          <span className="font-bold">Drink</span>
          <div className="flex-col">
            <DictionaryCard audioSrc="" word="iced-cold beer" />
            <DictionaryCard audioSrc="" word="sparking water" />
            <DictionaryCard audioSrc="" word="draft wine" />
          </div>
          <span className="font-bold">Extra</span>
          <Link href="/specific-purposes/food-drink/how-to-clean-and-remove-pesticides">
            <p>
              How to Clean and Remove Pesticides From Your Fruits and Vegetables
            </p>
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
