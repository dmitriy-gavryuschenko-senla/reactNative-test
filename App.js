import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import NavContainer from './src/components/NavContainer';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  )
}

export default App;

