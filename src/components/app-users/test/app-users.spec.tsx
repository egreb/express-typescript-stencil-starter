import { newSpecPage } from '@stencil/core/testing';
import { AppUsers } from '../app-users';

describe('app-users', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppUsers],
      html: `<app-users></app-users>`,
    });
    expect(page.root).toEqualHtml(`
      <app-users>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-users>
    `);
  });
});
