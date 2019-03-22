import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './style.scss';

@connect(({ article }) => ({
  ...article,
}))

class ArticleDetail extends Component{
  config = {
    navigationBarTitleText: '文章详情',
  };

  componentDidMount = () => {
    const id = this.$router.params.id;
    this.props.dispatch({
      type: 'article/getArticleDetail',
      payload: {
        id,
      }
    });
  };

  // 分享
  onShareAppMessage() {
    return {
      title: '首页',
      path: '/pages/articleDetail/index',
    }
  }

  render(){
    return(
      <View className='article-box'>
        <View className='article-detail'> 
          <View className='article-title'>
            <Text>{this.props.title}</Text>
          </View>
          <View className='article-content'>
            <Text>{this.props.content}</Text>
          </View>
          <View className='article-action'>
            <Text>{this.props.time}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ArticleDetail;