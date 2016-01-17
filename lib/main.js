import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/configureStore';
import Counter from './components/pages/counter';

const renderApp = () => {
  ReactDOM.render(<Counter />, document.getElementById('app'))
}

store.subscribe(renderApp);
renderApp();
