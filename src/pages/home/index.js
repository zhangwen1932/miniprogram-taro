import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import './index.scss';

//与相应的model里的数据连接
@connect(({test, loading }) => ({
  ...test,
  ...loading,
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  }

  constructor() {
    super(...arguments);
  }

  componentDidMount = () => {
    this.props.dispatch(action("test/load"));
  }

  // 分享
  onShareAppMessage() {
    return {
      title: '测试分享',
      path: '/pages/home/index',
    }
  }

  render () {
    const { data } = this.props;
    console.log('data', data);
    return (
      <View className='index'>
        <View className='container'>
          {
            data.list.length ?
              data.list.map(item => {
                return <View key={item._id}>
                  <Text>{item.title}</Text>
                </View>
              })
            : 
          <View>Hello World</View> 
          }
        </View>
      </View>
    )
  }
}
