function tailwindPlugin() {
    return {
      name: 'tailwind-plugin',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins = [
          require('postcss-import'),
          require('tailwindcss/nesting'),
          require('tailwindcss'),
          require('autoprefixer'),
        ];
        return postcssOptions;
      },
    };
  }
  
  module.exports = tailwindPlugin;