import { createRouter,createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Valid from '../components/Valid.vue'
import Detail from '../components/Detail.vue'
import Admin from '../components/Admin.vue'
import Auth from '../components/Auth.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Main',
            component: () => Main,
            
        },
        {
            path: '/check-valid',
            name: 'CheckValid',
            component: () => Valid,


        },
        {
            path: '/:id',
            name: 'Detail',
            component: () => Detail,
            props: true
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => Auth
        
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => Admin,
            
        },


          
    ]

})

export default router;