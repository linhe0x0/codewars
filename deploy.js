const ghpages = require('gh-pages')

ghpages.publish('_book', {
  branch: 'gh-pages',
  repo: 'git@github.com:sqrthree/codewars.git',
  message: `Update at ${new Date().toISOString()}`,
}, () => {
  console.log()
  console.log('Deploy to GitHub successfully.')
  console.log('To http://blog.sqrtthree.com/codewars to preview.')
})
