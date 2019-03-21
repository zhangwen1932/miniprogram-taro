import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './style.scss';

export default class ArticleCell extends Component {
  render() {
    return (
      <View className='article-cell'>
        <View className='article-container'>
          <View className='article-title'>
            <Text>{this.props.title}</Text>
          </View>
          <View className='article-content'>
            <Text>{this.props.content}</Text>
          </View>
          <View className='article-action'>
            <View className='article-like'>
              <View>{this.props.likeCount}喜欢</View>
            </View>
            <View className='article-comments'>
              <View>{this.props.commentsCount}评论</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
