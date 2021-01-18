import 'https://cdn.jsdelivr.net/npm/vue-router';

const Page = () => VueScooter.load('./views/page/index.vue');

const routes = [
  { path: '/', component: Page },
];
export default new VueRouter({
  routes,
});
