import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import Link from 'next/link'

export default function TaylorSwift() {
  return (
    <>
    <Whiteboard
    title="Specific Purposes"
    subtitle="Songs"
    descriptions={["Taylor Swift"]}
    />
    <div>
      <Link href="/specific-purposes/songs/taylor-swift/blank-space">
      <p>Blank Space</p>
      </Link>
    </div>
    </>
  )
}
