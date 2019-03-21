import Taro from '@tarojs/taro';
import action from "../utils/action";
import request from "../utils/request";

export default {
  namespace: 'test',
  state: { data: [] },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    }
  },
  effects: {
    * load({},{call, put}) {
      let {data} = yield call(request, {
        url: 'http://127.0.0.1:9100/api/getAuthorArticles?isPublish=true'
      });
      yield put(action("save", {data: data}))
    }
  },
};
