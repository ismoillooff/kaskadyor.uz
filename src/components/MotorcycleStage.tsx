import { AnimatePresence, m, useTransform } from 'motion/react'
import { GEARS, MOTORCYCLE, type GearId } from '../data/brand'
import { BIKE_FOCUS, FOCUS_PULL, PARALLAX, PRODUCT_ENTER } from '../config/motion'
import type { ParallaxValues } from '../hooks/usePointerParallax'

interface StageProps {
  gear: GearId
  parallax: ParallaxValues
  /** Large layouts get the depth-of-field blur; small ones only dim */
  allowBlur: boolean
}

/**
 * The machine in its pool of light. Selecting a gear racks focus:
 * the bike recedes (dim + defocus), the equipment steps forward.
 * The wrapper box matches the bike's trimmed silhouette (1430×1034 of the
 * 2000×1500 cutout), so placement math works on the visible subject.
 */
export function MotorcycleStage({ gear, parallax, allowBlur }: StageProps) {
  const bikeX = useTransform(parallax.nx, (v) => v * PARALLAX.bike.x)
  const bikeY = useTransform(parallax.ny, (v) => v * PARALLAX.bike.y)
  const product = GEARS.find((g) => g.id === gear)?.product
  const engaged = Boolean(product)
  const engagedState = allowBlur ? BIKE_FOCUS.engaged : { ...BIKE_FOCUS.engaged, filter: 'blur(0px)' }

  return (
    <div className={`stage${engaged ? ' is-engaged' : ''}`} id="gear-stage">
      <div className="stage-floor" aria-hidden="true" />

      <m.div className="stage-parallax" style={{ x: bikeX, y: bikeY }}>
        <m.div
          className="stage-focus"
          initial={false}
          animate={engaged ? engagedState : BIKE_FOCUS.neutral}
          transition={FOCUS_PULL}
        >
          <div className="stage-bike">
            <img
              src={MOTORCYCLE.src}
              srcSet={MOTORCYCLE.srcSet}
              sizes="(min-width: 1024px) 74vw, 132vw"
              width={MOTORCYCLE.width}
              height={MOTORCYCLE.height}
              alt={MOTORCYCLE.alt}
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
            <span className="stage-sweep" aria-hidden="true" />
          </div>
        </m.div>
      </m.div>

      <AnimatePresence initial={false}>
        {product && (
          <m.figure
            key={gear}
            className={`stage-product stage-product--${product.shape}`}
            initial={PRODUCT_ENTER.initial}
            animate={PRODUCT_ENTER.animate}
            exit={PRODUCT_ENTER.exit}
            transition={FOCUS_PULL}
          >
            <span className="stage-product-light" aria-hidden="true" />
            <img
              src={product.src}
              srcSet={product.srcSet}
              sizes="(min-width: 1024px) 26vw, 62vw"
              width={product.width}
              height={product.height}
              alt={product.alt}
              decoding="async"
              draggable={false}
            />
          </m.figure>
        )}
      </AnimatePresence>
    </div>
  )
}
