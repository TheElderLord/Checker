import { createRouter,createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Valid from '../components/Valid.vue'
import Detail from '../components/Detail.vue'
import Admin from '../components/Admin.vue'
import Auth from '../components/Auth.vue'
import Edit from '../components/Edit.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/main',
            name: 'Main',
            component: () => Main,
            props: (route) => ({ lang: route.query.lang }),
            
        },
        {
            path: '/check-valid',
            name: 'CheckValid',
            component: () => Valid,
            props: (route) => ({ lang: route.query.lang }),


        },
        {
            path: '/records',
            name: 'Detail',
            component: () => Detail,
            props: (route) => ({
                lang: route.query.lang,
                id: route.query.id
              }),
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => Auth,
            props: (route) => ({ lang: route.query.lang }),
        
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => Admin,
            props: (route) => ({ lang: route.query.lang }),
            
        },
        {
            path: '/edit',
            name: 'Edit',
            component: () => Edit,
            props: (route) => ({ lang: route.query.lang,id: route.query.id }),

        }


          
    ]

})

export default router;