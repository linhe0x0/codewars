const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  i18n: {
    locales: ['js', 'go'],
    defaultLocale: 'js',
  },
})
