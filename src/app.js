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
      'pages/userInfo/index',
      'pages/articleDetail/index',
      'pages/test/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2A8CE5',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#858585",
      selectedColor: "#2A8CE5",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/home/index",
          iconPath: "images/icons/index.png",
          selectedIconPath: "images/icons/index_focus.png",
          text: "首页"
        },
        {
          pagePath: "pages/userInfo/index",
          iconPath: "images/icons/discovery.png",
          selectedIconPath: "images/icons/discovery_focus.png",
          text: "个人中心"
        },
        {
          pagePath: "pages/test/index",
          iconPath: "images/icons/ring.png",
          selectedIconPath: "images/icons/ring_focus.png",
          text: "测试登录"
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
