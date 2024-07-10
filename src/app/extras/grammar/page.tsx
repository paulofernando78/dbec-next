import { DescriptionCard } from '@/components/Cards/DescriptionCard'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import Link from 'next/link'
import React from 'react'

const descriptions = [
    {
        label: "Grammar in Use",
        contents: [
            {
                link: "/extras/grammar/elementary",
                linkLabel: "Elementary"
            },
            {
                link: "/extras/grammar/elementary",
                linkLabel: "Intermediate"
            },
            // {
            //     link: "/extras/grammar/elementary",
            //     linkLabel: "Advanced"
            // }
        ]
    }
]

export default function Grammar() {
  return (
   <>
   <Whiteboard title="Extras" subtitle="Grammar"/>
   <DescriptionCard descriptions={descriptions} />
   </>
  )
}

