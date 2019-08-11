import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'

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
        },
        {
            path:  '/resume.pdf',
            component: Resume
        }
    ]
});
export default router;