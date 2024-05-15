import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

import styles from "./food-drink.module.css"

export default function FoodDrink() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Food / Drink" />
      <div className="line-break">
        <p><b>Vocabulary</b></p>
        <div className="line-break">
          <Card>Fruit</Card>
          <div className={styles["flex"]}>
            <DictionaryCard label="apple" phonetics="" audioSrc="/assets/audio/dictionary/" />
            <DictionaryCard label="strawberry" phonetics="" audioSrc="/assets/audio/dictionary/" />
            </div>
         
        </div>
        <div className="line-break">
          <Card>Vegetables</Card>
          <div className={styles["flex"]}>
            <DictionaryCard label="broccoli" phonetics="/ˈbrɑː.kəl.i/" audioSrc="/assets/audio/dictionary/" />
            <DictionaryCard label="cucumber" phonetics="/ˈkjuː.kʌm.bɚ/" audioSrc="/assets/audio/dictionary/" />
            <DictionaryCard label="cauliflower" phonetics="/ˈkɑː.ləˌflaʊ.ɚ/" audioSrc="/assets/audio/dictionary/" />
            <DictionaryCard label="kale" phonetics="/keɪl/" audioSrc="/assets/audio/dictionary/" />
          </div>
        </div>
      </div>
    </>
  );
}
