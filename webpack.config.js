const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = (config, options) => {

  // being explicit about the NODE_ENV here.. setting it to production will trigger removal of unused tailwind-styles via the purge option
  process.env.NODE_ENV = config.mode === 'production' ? 'production' : 'development';
  console.log(`Using '${config.mode}' mode`);
  config.module.rules.push({
    test: /tailwind\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            tailwindcss,
            autoprefixer,
          ],
        },
      },
    ],
  });
  return config;
};
