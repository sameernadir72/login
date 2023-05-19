import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoginForm from './LoginForm';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginForm />
      </PersistGate>
    </Provider>
  );
};

export default App;
