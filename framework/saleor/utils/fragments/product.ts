export const ProductConnection = /* GraphQL */ `
  fragment ProductConnection on ProductCountableConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        name
        description
        slug
        pricing {
          priceRange {
            start {
              net {
                amount
                currency
              }
            }
          }
        }
        media {
          url
          alt
        }
      }
    }
  }
`
