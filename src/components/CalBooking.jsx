import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

/** Embed height: 660px — fits month view without forcing page-level scroll on the iframe wrapper. */
export const CalBooking = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        cssVarsPerTheme: {
          dark: { 'cal-brand': '#F5FCFF' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <div className="h-[560px] w-full sm:h-[660px]">
      <Cal
        namespace="30min"
        calLink="ali-bejeli/30min"
        style={{ width: '100%', height: '100%' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
      />
    </div>
  )
}
