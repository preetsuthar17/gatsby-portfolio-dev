exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify'),
      },
    },
  })
}
