/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-cssnext')(),
    require('cssnano')()
  ]
}