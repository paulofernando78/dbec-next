import { DictionaryCard } from '@/components/DictionaryCard/DictionaryCard'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import React from 'react'

export default function Vocaulary() {
  return (
    <>
    <Whiteboard title="Specific-purposes" subtitle="Stock Market" descriptions={["Vocabulary"]}/>
    <div>
        <DictionaryCard audioSrc="/c/capital-flight.mp3" label="capital flight"/>
    </div>
    </>
  )
}
