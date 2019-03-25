import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import eyePng from '../../images/icons/eye.png';
import starPng from '../../images/icons/star.png';
import writePng from '../../images/icons/write.png';

import './style.scss';

@connect(({user}) => ({
  ...user,
}))

class Author extends Component{
  config = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    super(...arguments);
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'user/getUserInfo'
    });
  }

  render(){
    console.log('this.props', this.props);
    return(
      <View className='author-information'>
        <View className='user flex-wrp'>
          <View className='avatar flex-item'>
            <Image className='userinfo-avatar' src={this.props.avatar} backgroundSize='cover'></Image>
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>{this.props.authorname}</Text>
            <Text className='edit'>{this.props.profile}</Text>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={eyePng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>{this.props.occupation}</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={starPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>{this.props.company}</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={writePng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>浙江省杭州市</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Author;