import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import commerce from '@lib/api/commerce'

export async function getSearchStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const [
    { pages },
    { categories, brands },
  ] = await Promise.all([
    commerce.getAllPages({ config, preview }),
    commerce.getSiteInfo({ config, preview }),
  ])
  return {
    props: {
      pages,
      categories,
      brands,
    },
    revalidate: 200,
  }
}

export type SearchPropsType = InferGetStaticPropsType<
  typeof getSearchStaticProps
>
