import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const { resolve } = require('path');

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',

  devServer: {
    port: 3335, // as on OnzeWeb's Mac :-)
  },

  testing: {
    modulePaths: ['<rootDir>/src/utils/'], // does not seem to work
    // additional params for pupetteer (e2e)
    browserHeadless: false,
  },

  nodeResolve: {
    preferBuiltins: true,
  },

  sourceMap: true,

  // bundles: [{ components: ['ion-select-popover', 'ion-radio'] }],

  plugins: [
    sass({
      includePaths: ['./src/global'], // for shorter @import in .scss
      // injectGlobalPaths: ['src/globals/sphere.scss']
    }),
  ],

  outputTargets: [
    {
      type: 'www',
      dir: 'www',
      serviceWorker: null,
      copy: [
        {
          src: '**/*.i18n.*.json',
          dest: 'i18n',
        },
        {
          src: '**/*.xml',
          dest: 'i18n',
        },
        {
          src: '**/images/*.*',
          dest: 'images',
        },
        {
          src: '**/test/!(*.ts)',
          dest: 'test',
        },
      ],
    },
    {
      type: 'docs-readme',
    },
  ],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      // resolvePlugin()
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills(),
    ],
  },
};
