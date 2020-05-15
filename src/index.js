import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './component/dashboard.js';
import * as serviceWorker from './serviceWorker';
import MyCustomMeta from './service/metaData';
import './scss/index.scss';
const metaParams = {
  title:'Covid-19 in Myanmar',
  description:'Covid-19 in Myanmar',
  keyWords:'Covid-19 in Myanmar',
  url:'https://covidmyanmar.heinsoe.com',
  theme:'#000',
  og:{
      imgUrl:'',
      type:'website',
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Dashboard country="Myanmar" />
    <MyCustomMeta {...metaParams}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
