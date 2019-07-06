import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() count: string = 'first';

  render() {
    return <div>Your <span class="tomat">{`{ ${this.count} }`}</span> Stencil component!</div>;
  }
}
