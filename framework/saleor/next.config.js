const commerce = require('./commerce.config.json')

module.exports = {
  commerce,
  images: {
    domains: [process.env.COMMERCE_IMAGE_HOST],
  },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/checkout',
      },
    ]
  },
}
