import React, { SFC } from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import Router from './router';
import rootStore from './stores';

configure({ enforceActions: true, computedRequiresReaction: true });
const App: SFC = () => {
  return (
    <Provider {...rootStore}>
      <Router />
    </Provider>
  );
};

export default App;
