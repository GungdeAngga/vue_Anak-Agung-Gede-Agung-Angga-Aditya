"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _thisNews = _interopRequireDefault(require("@/views/thisNews.vue"));

var _thisDeskripsi = _interopRequireDefault(require("@/views/thisDeskripsi.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'thisNews',
  component: _thisNews["default"]
}, {
  path: '/thisDeskripsi/:id',
  name: 'thisDeskripsi',
  component: _thisDeskripsi["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;