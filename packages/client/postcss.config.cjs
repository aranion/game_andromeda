module.exports = ctx => ({
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-nested': ctx.options?.plugin && {},
    'postcss-import': ctx.options?.plugin && {},
    'postcss-easings': ctx.options?.plugin && {},
    autoprefixer: ctx.options?.plugin && {},
    cssnext: ctx.options?.plugin && {},
  },
});
