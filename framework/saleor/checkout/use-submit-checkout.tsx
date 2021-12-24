import { useCallback } from 'react'
import type { SubmitCheckoutHook } from '@commerce/types/checkout'
import type { MutationHook } from '@commerce/utils/types'
import useSubmitCheckout, { UseSubmitCheckout } from '@commerce/checkout/use-submit-checkout'

export default useSubmitCheckout as UseSubmitCheckout<typeof handler>

export const handler: MutationHook<SubmitCheckoutHook> = {
  fetchOptions: {
    url: '/api/checkout',
    method: 'POST',
  },
  async fetcher({ input: item, options, fetch }) {
    const data = await fetch({
      ...options,
      body: { item },
    })

    // TODO mp.checkout({ preference: { data.preferenceId }, autoOpen: true })

    return data
  },
  useHook: ({ fetch }) =>
    function useHook() {
      return useCallback(
        async function onSubmitCheckout(input) {
          return await fetch({ input });
        },
        [],
      )
    },
};
