module.exports = {
  transpileDependencies: ['common'],
  outputDir: `../dist`,
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-example'
        return args
      })
  }
}
