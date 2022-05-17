import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil / TypeORM / Express App Starter. Check out:
          <ul>
            <li>
              <a href="https://stenciljs.com">stenciljs.com</a>
            </li>
            <li>
              <a href="https:typeorm.io/">typeorm.io/</a>
            </li>
            <li>
              <a href="https://expressjs.com/fr/">expressjs.com/fr/</a>
            </li>
          </ul>
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Stencil profile</button>
        </stencil-route-link>
        <stencil-route-link url="/list">
          <button>TypeORM Users</button>
        </stencil-route-link>
      </div>
    );
  }
}
