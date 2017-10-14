import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import HomeContainer from './containers/HomeContainer';

const store = createStore(reducers);

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={HomeContainer} />
		</BrowserRouter>
	</Provider>
);

export default App;
