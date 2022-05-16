import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-users',
  styleUrl: 'app-users.css',
  shadow: true,
})
export class AppUsers {
  render() {
    return (
      <Host>
        <p>these are the Users stored in database through TypeORM</p>
        );
      </Host>
    );
  }
}
