Vue.use(VueRouter);
const Page = () => VueScooter.load('./views/page/index.vue');

const routes = [
  { path: '/', component: Page },
];
export default new VueRouter({
  routes,
});
