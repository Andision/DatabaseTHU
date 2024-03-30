const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addBabelPlugin([
    '@babel/plugin-proposal-nullish-coalescing-operator',
    { loose: true }
  ])
 );