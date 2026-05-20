import { useEffect, useState } from 'react'

/** Embed height: 660px — fits month view without forcing page-level scroll on the iframe wrapper. */
export const CalBooking = () => {
  const [CalComponent, setCalComponent] = useState(null)

  useEffect(() => {
    let isMounted = true

    const initCal = async () => {
      const module = await import('@calcom/embed-react')
      if (!isMounted) return

      setCalComponent(() => module.default)

      const cal = await module.getCalApi({ namespace: '30min' })
      if (!isMounted) return

      cal('ui', {
        cssVarsPerTheme: {
          dark: { 'cal-brand': '#F5FCFF' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    // Defer non-critical third-party embed work to reduce long main-thread tasks.
    const schedule =
      window.requestIdleCallback ??
      ((callback) => window.setTimeout(callback, 350))
    const cancelSchedule =
      window.cancelIdleCallback ?? window.clearTimeout

    const scheduledId = schedule(() => {
      void initCal()
    })

    return () => {
      isMounted = false
      cancelSchedule(scheduledId)
    }
  }, [])

  return (
    <div className="h-[560px] w-full sm:h-[660px]">
      {CalComponent ? (
        <CalComponent
          namespace="30min"
          calLink="ali-bejeli/30min"
          style={{ width: '100%', height: '100%' }}
          config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-full w-full animate-pulse rounded-2xl bg-slate-100"
        />
      )}
    </div>
  )
}
