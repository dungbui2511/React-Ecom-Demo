import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { persitor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { app } from './firebase.config';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persitor}>
    <App/>
    </PersistGate>
    </Provider>
    
);
