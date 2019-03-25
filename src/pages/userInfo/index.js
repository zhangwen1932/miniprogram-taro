import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import eyePng from '../../images/icons/eye.png';
import starPng from '../../images/icons/star.png';
import writePng from '../../images/icons/write.png';

import './style.scss';

class Author extends Component{
  config = {
    navigationBarTitleText: '我的'
  }

  render(){
    return(
      <View className='author-information'>
        <View className='user flex-wrp'>
          <View className='avatar flex-item'>
            <Image className='userinfo-avatar' src='https://wx2.sinaimg.cn/mw1024/9499f9e8ly1fyhrmm715tj20u00u00ti.jpg' backgroundSize='cover'></Image>
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>墙头马</Text>
            <Text className='edit'>查看或编辑个人主页</Text>
          </View>
        </View>
        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={eyePng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>自由职业者</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <Image class='myitem-img' src={starPng}></Image>
            </View>
            <View className='myitem-name flex-item'>
              <Text>测试科技有限公司</Text>
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