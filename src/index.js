import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import 'config/reactotron';

import { store, persistor } from 'config/redux';
import Navigator from 'config/navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
