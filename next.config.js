const nextra = require('nextra')

const isProd = process.env.NODE_ENV === 'production'

const withNextra = nextra('nextra-theme-docs', './theme.config.js')

module.exports = withNextra({
  assetPrefix: isProd ? '/codewars/' : '',
  pageExtensions: ['mdx', 'md', 'jsx', 'page.js'],
})
