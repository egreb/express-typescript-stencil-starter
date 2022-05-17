import { Component, Host, h, State } from '@stencil/core';

import { User } from '../../entity/User';
import state from 'store';

@Component({
  tag: 'app-users',
  styleUrl: 'app-users.css',
  shadow: true,
})
export class AppUsers {
  @State() users: Array<User>;
  componentWillLoad() {
    debugger;
    return state.AppDataSource.getRepository(User)
      .find()
      .then(users => (this.users = users));
  }
  render() {
    return (
      <Host>
        <p>these are the Users stored in database through TypeORM</p>
        <ul>
          {this.users.map(user => (
            <li>
              {user.id}
              {user.firstName}
              {user.lastName}
              {user.age}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
