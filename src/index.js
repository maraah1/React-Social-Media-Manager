import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import {fetchButtons} from './redux/actions/buttons'
import {fetchPictures} from './redux/actions/pictures'
import { fetchPosts } from './redux/actions/posts'

let newStore = store()

newStore.dispatch(fetchButtons())
newStore.dispatch(fetchPosts())

ReactDOM.render(
  <Provider store={newStore} >
     <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
