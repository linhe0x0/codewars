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

ghpages.publish('_book', {
  branch: 'coding-pages',
  repo: 'git@git.coding.net:sqrtthree/codewars.git',
  message: `Update at ${new Date().toISOString()}`,
}, () => {
  console.log()
  console.log('Deploy to Coding successfully.')
  console.log('To http://sqrtthree.coding.me/codewars to preview.')
})
