"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = function state() {
  return {
    listNews: [],
    info: ''
  };
};

var mutations = {
  setNews: function setNews(state, param) {
    state.listNews = param;
  },
  setError: function setError(state, param) {
    state.info = param;
  }
};
var actions = {
  fecthNews: function fecthNews(store) {
    _axios["default"].get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b00907d09ca4a66a76fd7b0663138f3').then(function (response) {
      store.commit('setNews', response.data.articles);
      console.log(response);
    })["catch"](function (error) {
      store.commit('setError', error);
    });
  }
};
var _default = {
  state: state,
  actions: actions,
  mutations: mutations
};
exports["default"] = _default;