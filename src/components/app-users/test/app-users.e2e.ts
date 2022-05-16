import { newE2EPage } from '@stencil/core/testing';

describe('app-users', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-users></app-users>');

    const element = await page.find('app-users');
    expect(element).toHaveClass('hydrated');
  });
});
