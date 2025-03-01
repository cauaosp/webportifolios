import { ReactNode } from "react"

export type HomepageSlidesEntity = {
  title: string,
  description: string,
  list: string[],
  dot: string | ReactNode
}

export type CarouselHomepageProps = {
  isMobile?: boolean
}