/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-cssnext')(),
    require('postcss-modules')({
      generateScopedName: '[local]-[hash:base64:5]'
    }),
    require('cssnano')()
  ]
}