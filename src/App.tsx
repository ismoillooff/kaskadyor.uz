import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { HeroExperience } from './components/HeroExperience'
import { UnderDevelopment } from './components/UnderDevelopment'
import type { PageId } from './lib/pages'

export default function App({ page }: { page: PageId }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <main>{page === 'holding' ? <UnderDevelopment /> : <HeroExperience demo={page === 'demo'} />}</main>
      </MotionConfig>
    </LazyMotion>
  )
}
