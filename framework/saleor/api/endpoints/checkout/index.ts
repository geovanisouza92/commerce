import { CommerceAPI, GetAPISchema, createEndpoint } from '@commerce/api'
import checkoutEndpoint from '@commerce/api/endpoints/checkout'
import { CheckoutSchema } from '@commerce/types/checkout'

export type CheckoutAPI = GetAPISchema<CommerceAPI, CheckoutSchema>

import { getCheckout } from './get-checkout'
import { submitCheckout } from './submit-checkout'

const checkoutApi = createEndpoint<CheckoutAPI>({
  handler: checkoutEndpoint,
  handlers: { getCheckout, submitCheckout },
})

export default checkoutApi
