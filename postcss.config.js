module.exports = ({ env, options }) => ({
  plugins: {
    cssnano: env === 'production' ? options.cssnano : false,
  },
});
