import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class ArticleDetail extends Component{
  render(){
    return(
      <View className='article-box'>
        <View className='article-detail'> 
          <View className='article-title'>
            <Text>Hello World</Text>
          </View>
          <View className='article-content'>
          </View>
          <View className='article-action'>
          </View>
        </View>
      </View>
    )
  }
}

export default ArticleDetail;