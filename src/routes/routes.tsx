import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Switch>
        <Route path="/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;