import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import heartPng from '../../images/icons/heart2.png';
import writePng from '../../images/icons/write.png';

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
          <View className='article-time'>
            <Text>{this.props.time}</Text>
          </View>
          <View className='article-content'>
            <Text>{this.props.content}</Text>
          </View>
          <View className='article-operate flex-wrp'>
            <View className='article-like flex-item'>
              <Image src={heartPng}></Image>
              <Text>点赞</Text>
            </View>
            <View className='article-comment flex-item'>
              <Image src={writePng}></Image>
              <Text>写评论</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ArticleDetail;