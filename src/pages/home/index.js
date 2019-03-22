import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import ArticleCell from '../../components/articleCell/articleCell';

import './index.scss';

//与相应的model里的数据连接
@connect(({home, loading }) => ({
  ...home,
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
    this.props.dispatch({
      type: 'home/load'
    });
  }

  // 分享
  onShareAppMessage() {
    return {
      title: '首页',
      path: '/pages/home/index',
    }
  }

  render () {
    const { articles } = this.props;
    // const data = [...articles.list];
    // articles.list.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    return (
      <View className='index'>
        <View className='container'>
          {
            articles.list.length ?
              articles.list.map(item => {
                return <ArticleCell
                  key={item._id}
                  indexId={item._id}
                  title={item.title}
                  content={item.content}
                  likeCount={item.likeCount}
                  commentsCount={item.commentsCount}
                  time={item.time}
                />
              })
            : 
          <View>暂无数据</View> 
          }
        </View>
      </View>
    )
  }
}
