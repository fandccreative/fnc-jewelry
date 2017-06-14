import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/bootstrap.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/style.css';
import './assets/css/normalize.css';
import './assets/css/fonts.css';
import './assets/css/resp.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
