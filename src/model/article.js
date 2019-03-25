import Taro from '@tarojs/taro';
import action from "../utils/action";
import request from "../utils/request";

export default {
  namespace: 'article',
  state: { 
    title: '',
    content: '',
    time: '',
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    * getArticleDetail({payload},{call, put}) {
      const id = payload.id;
      const { data } = yield call(request, {
        url: `http://127.0.0.1:9100/api/admin/article/getArticlesDetail?id=${id}`
      });
      console.log('data', data);
      yield put(action(
        "save",
        {
          title: data.title,
          content: data.content,
          time: data.time,
        }
      ))
    }
  },
};
