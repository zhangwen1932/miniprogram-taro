import Taro from '@tarojs/taro';
import action from "../utils/action";
import request from "../utils/request";

export default {
  namespace: 'home',
  state: { articles: [] },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    }
  },
  effects: {
    * load({},{call, put}) {
      const {data} = yield call(request, {
        url: 'http://127.0.0.1:9100/api/getAuthorArticles?isPublish=true'
      });
      console.log('data', data)
      yield put(action("save", {articles: data}))
    }
  },
};
