import { Config } from '@stencil/core';
import path from 'path'

export const config: Config = {
  namespace: 'expressstencilstarter',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: path.join(__dirname, 'resources/assets/components'),
      empty: true,
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
