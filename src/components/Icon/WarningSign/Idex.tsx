import { ReactNode } from "react";
import Image from "next/image"

import { warningSign } from "@/img/index"

interface IconWanrningSignProps {
    children: ReactNode
}

export const IconWarningSign = ({children}:IconWanrningSignProps) => {
  return (
    <>
    <div className="flex-8px-center-wrap">
        <Image src={warningSign} alt="Warning sign" className="icon-general"/>
        <span className="p-font">{children}</span>
    </div>
    </>
  )
}
