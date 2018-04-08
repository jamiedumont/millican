var theme = 'millican';

exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: `js/${theme}.js`
    },
    stylesheets: {
      joinTo: `css/${theme}.css`
    }
  },

  // Path configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: ["src"],
    // Where to compile files to
    public: "./"
  },

  // Configure your plugins
  plugins: {
    postcss: {
      processors: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss')('./tailwind.js'),
        require('autoprefixer')(),
        require('csswring')()
      ]
    }
  },

  npm: {
    styles: {
      photoswipe: [
        'dist/photoswipe.css'
      ]
    },
    globals: {
      Photoswipe: 'photoswipe'
    },
    static: [
      'photoswipe/dist/photoswipe-ui-default.min.js'
    ]
  },

  modules: {
    wrapper: false
  }
};
