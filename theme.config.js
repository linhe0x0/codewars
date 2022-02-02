export default {
  i18n: [
    { locale: 'js', text: 'JavaScript' },
    { locale: 'go', text: 'Go' },
  ],
  projectLink: 'https://github.com/sqrthree/codewars', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/sqrthree/codewars/blob/master', // base URL for the docs repository
  titleSuffix: ' – Sqrtthree',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: (
    <>
      <span>MIT {new Date().getFullYear()} © </span>
      <a href="https://github.com/sqrthree/" target="_blank">
        SQRTTHREE
      </a>
    </>
  ),
  footerEditLink: `Edit this page on GitHub`,
  logo: 'Codewars',
}
