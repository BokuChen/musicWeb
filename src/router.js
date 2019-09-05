import Vue from 'vue'
import Router from 'vue-router'


import main from './components/main';
import album from './components/album';
import song from './components/song';
Vue.use(Router)

const routes = [{
  path: '/',
  component: main,

}, {
  path: '/:id',
  component: album
},
{
  path: '/:id/:song',
  component: song
},


];

export default new Router({
    linkActiveClass: 'active',
    routes
});
