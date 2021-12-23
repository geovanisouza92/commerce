const { readdirSync, readFileSync } = require('fs')
const commerce = require('./commerce.config.json')
const { withCommerceConfig } = require('./framework/commerce/config')

function getI18n() {
  let defaultLocale
  const locales = []

  readdirSync('./public/locale', { withFileTypes: true }).forEach(dirent => {
    if (dirent.name === '.defaultLocale') {
      defaultLocale = readFileSync(`./public/locale/.defaultLocale`, 'utf8').trim()
      return
    }
    locales.push(dirent.name)
  })

  return { locales, defaultLocale }
}

module.exports = withCommerceConfig({
  commerce,
  i18n: getI18n(),
})

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
