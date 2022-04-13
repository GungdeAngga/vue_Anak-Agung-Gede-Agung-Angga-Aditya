import axios from 'axios';

const state = () => ({
  listNews: [],
  info: '',
});

const mutations = {
  setNews(state, param) {
    state.listNews = param;
  },
  setError(state, param) {
    state.info = param;
  },
};
const actions = {
  fecthNews(store) {
    axios
      .get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b00907d09ca4a66a76fd7b0663138f3')
      .then((response) => {
        store.commit('setNews', response.data.articles);
        console.log(response);
      })
      .catch((error) => {
        store.commit('setError', error);
      });
  },
};
export default {
  state,
  actions,
  mutations,
};
