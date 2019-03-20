import Taro, { Component } from '@tarojs/taro';
import Home from './pages/home';

import './app.scss'

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
      <Home />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
