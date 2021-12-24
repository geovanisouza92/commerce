import { CommerceAPI, GetAPISchema } from '@commerce/api'
import { CheckoutSchema } from '@commerce/types/checkout';
import * as mp from 'mercadopago'

mp.configure({ access_token: process.env.MP_ACCESS_TOKEN! })

type CheckoutAPI = GetAPISchema<CommerceAPI, CheckoutSchema>

export const submitCheckout: CheckoutAPI['endpoint']['handlers']['submitCheckout'] = async ({
  req,
  res,
  config,
}) => {
  const { headers, body } = req;
  console.log({ headers, body, config });

  try {
    // TODO Get checkout with privateMetadata
    // const checkout = await config.fetch('', { checkoutId: body.cartId });
    // If checkout doesn't have a preference in privateMetadata, create a new one
    /*
    TODO const preference = await mp.preferences.create({
      items: [
        {
          title: '',
          picture_url: '',
          quantity: 1,
          unit_price: 0,
        }
      ],
      payer: {
        name: '',
        surname: '',
        email: '',
        phone: {
          area_code: '',
          number: '',
        },
        identification: {
          type: 'CPF',
          number: '',
        },
      },
      back_urls: {
        pending: `${process.env.VERCEL_URL}/orders`,
        success: `${process.env.VERCEL_URL}/orders`,
        failure: `${process.env.VERCEL_URL}/orders`,
      },
      auto_return: 'approved',
      shipments: {
        cost: 0,
        receiver_address: {
          zip_code: '',
          street_name: '',
          street_number: '',
          apartment: '',
          city_name: '',
          state_name: '',
        },
      },
      notification_url: '',
      statement_descriptor: 'PESARO',
    })
    */
    // TODO Persist preference on privateMetadata if new

    res.writeHead(200, {
      'Content-Type': 'application/json',
    })
    // TODO: res.write(JSON.stringify(checkout))
    res.end()
  } catch (error) {
    console.error(error)
    const message = 'An unexpected error ocurred'
    res.status(500).json({ data: null, errors: [{ message }] })
  }
}
