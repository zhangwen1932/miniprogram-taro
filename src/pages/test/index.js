import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import './style.scss';

class Test extends Component{
  config = {
    navigationBarTitleText: '测试页面',
  };

  state = {
    userName: '',
    avatar: '',
    address: '',
    
  }

  handleTest = (e) => {
    e.stopPropagation();
    Taro.getUserInfo({
      withCredentials: 'true',
      lang: 'zh_CN',
      timeout:10000,
      success: (result)=>{
        const data=JSON.parse(result.rawData);
        console.log('data', data);
        this.setState({
          userName: data.nickName,
          avatar: data.avatarUrl,
          address: data.province,
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

  render(){
    console.log('this.state', this.state);
    return(
      <View className='login-container'>
        <Text>登陆后即可继续操作</Text>
        <View className='login-btn' onClick={this.handleTest}>
          <Text>
            授权微信后登录
          </Text>
        </View>
        {this.state.userName ? 
        <View className='user-info'>
          <Text>{this.state.userName}</Text>
          <Image src={this.state.avatar} />
            <Text>{this.state.address}</Text>
        </View>
        :
        <View>
          <Text>Hello World</Text>
        </View>
        }
      </View>
    )
  }
}

export default Test;