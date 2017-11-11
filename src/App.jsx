import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import MovieContainer from './containers/MovieContainer';
import PopularContainer from './containers/PopularContainer';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/popular" component={PopularContainer} />
        <Route exact path="/movie/:id" component={MovieContainer} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
