/** global / shared state
 * @see https://stenciljs.com/docs/stencil-store
 */
debugger;
import { createStore } from '@stencil/store';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../data-source';

const { state } = createStore({
  AppDataSource: AppDataSource as DataSource,
});

export default state;
