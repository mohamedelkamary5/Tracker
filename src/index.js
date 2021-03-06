import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlopalStyle from './styles/glopalStyle';
import { store } from "./store/store"
import { ToastProvider } from 'react-toast-notifications';
import { ConfigProvider } from 'antd';
import Gleap from "gleap";
import './i18n';



Gleap.initialize("VRGv3XWORjIxWyO3pyc20IQL8fgppSVE");



ReactDOM.render(
  <React.StrictMode>
    <GlopalStyle />

    <Provider store={store} >
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        placement="top-center" >
        <ConfigProvider direction="rtl">
          <App />
        </ConfigProvider>
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

