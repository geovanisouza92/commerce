import { CHECKOUT_ID_COOKIE } from './const'
import { handler as useCart } from './cart/use-cart'
import { handler as useAddItem } from './cart/use-add-item'
import { handler as useUpdateItem } from './cart/use-update-item'
import { handler as useRemoveItem } from './cart/use-remove-item'

import { handler as useCustomer } from './customer/use-customer'
import { handler as useSearch } from './product/use-search'

import { handler as useLogin } from './auth/use-login'
import { handler as useLogout } from './auth/use-logout'
import { handler as useSignup } from './auth/use-signup'

import { handler as useCheckout } from './checkout/use-checkout'
import { handler as useSubmitCheckout } from './checkout/use-submit-checkout'

import fetcher from './fetcher'

export const saleorProvider = {
  locale: process.env.DEFAULT_LOCALE || 'en-US',
  cartCookie: CHECKOUT_ID_COOKIE,
  fetcher,
  cart: {
    useCart,
    useAddItem,
    useUpdateItem,
    useRemoveItem,
  },
  checkout: {
    useCheckout,
    useSubmitCheckout,
  },
  customer: {
    useCustomer,
    // card: {
    //   useAddCards,
    //   useAddItem,
    //   useUpdateItem,
    //   useRemoveItem,
    // },
    addresses: {
      // TODO useAddAddress,
      // TODO useAddItem,
      // TODO useUpdateItem,
      // TODO useRemoveItem,
    },
  },
  products: {
    useSearch,
  },
  auth: {
    useLogin,
    useLogout,
    useSignup,
  },
}

export type SaleorProvider = typeof saleorProvider
