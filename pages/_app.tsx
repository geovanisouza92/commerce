import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { Head, Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en-US' } = useRouter()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <CommerceProvider locale={locale}>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </CommerceProvider>
      </ManagedUIContext>
    </>
  )
}
