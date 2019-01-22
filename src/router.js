import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Projects from './components/Projects'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '*',
            component: Home
        },
        {
            path: '/projects',
            component: Projects
        }
    ]
});
export default router;