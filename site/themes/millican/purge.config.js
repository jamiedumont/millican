module.exports = {
  css: [ 
    'css/millican.css'
  ],
  content: [
    'layouts/*.html',
    'templates/**/*.html',
    'templates/*.html',
    'partials/**/*.html',
    'partials/*.html',
    'node_modules/photoswipe/dist/*.js'
  ],
  extractors: [
    {
    extractor: class {
      static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
      }
    },
    extensions: ["html", "js"]
    }
  ]
}
