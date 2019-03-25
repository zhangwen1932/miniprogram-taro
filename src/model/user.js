import Taro from '@tarojs/taro';
import action from "../utils/action";
import request from "../utils/request";

export default {
  namespace: 'user',
  state: {
    authorname: '',
    profile: '',
    avatar: '',
    occupation: '',
    company: ''
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    * getUserInfo({}, {call, put}) {
      const {data} = yield call(request, {
        url: 'http://127.0.0.1:9100/api/getIntro'
      });
      console.log('data', data);
      yield put(
        action("save", {
          authorname: data.username,
          profile: data.profile,
          avatar: data.avatar,
          occupation: data.occupation,
          company: data.company
        })
      )
    }
  }
}