import Taro from '@tarojs/taro';
// import action from "../utils/action";
// import request from "../utils/request";

export default {
  namespace: 'test',
  state: {
    userID: '',
    userName: '',
    avatar: '',
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    * getArticleDetail({ }, {}) {
      console.log('hello world');
    }
  },
};