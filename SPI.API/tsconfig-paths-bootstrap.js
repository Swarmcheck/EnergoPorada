/* eslint-disable @typescript-eslint/no-var-requires */
const tsConfigPaths = require('tsconfig-paths');

const tsConfig = require('./tsconfig.json');

const paths = tsConfig.compilerOptions.paths;
tsConfigPaths.register({
  baseUrl: 'dist/',
  paths: Object.keys(paths).reduce(
    (agg, key) => ({
      ...agg,
      [key]: paths[key].map(p =>
        p.replace(tsConfig.compilerOptions.baseUrl, 'dist/'),
      ),
    }),
    {},
  ),
});