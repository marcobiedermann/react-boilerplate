module.exports = ({ env }) => ({
  plugins: {
    cssnano: env === 'production' ? {} : false,
  },
});
