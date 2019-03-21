import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import action from './utils/action';
import Home from './pages/home';
import dva from './dva';
import models from './model'; //  数据中心

import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});

const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/userInfo/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "color": "#858585",
      "selectedColor": "#39b5de",
      "borderStyle": "black",
      "list": [
        {
          "pagePath": "pages/home/index",
          "iconPath": "images/icons/mark.png",
          "selectedIconPath": "images/icons/markHL.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/userInfo/index",
          "iconPath": "images/icons/mine.png",
          "selectedIconPath": "images/icons/mineHL.png",
          "text": "个人中心"
        }
      ]
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
