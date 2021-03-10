import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserInfo from '../pages/UserInfo';
import UserList from '../pages/UserList';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="users" />
    </Route>
    <Route path="/users" exact component={UserList} />
    <Route path="/users/view/:id" component={UserInfo} />
  </Switch>
);

export default Routes;
