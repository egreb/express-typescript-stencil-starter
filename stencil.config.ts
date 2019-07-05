import { Config } from '@stencil/core';
import path from 'path'

export const config: Config = {
  namespace: 'expressstencilstarter',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: path.join(__dirname, 'resources/components/loader'),
      dir: path.join(__dirname, 'resources/components'),
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
