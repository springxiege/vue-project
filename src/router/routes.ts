import { RouteConfig } from 'vue-router'
import HelloWorld from 'views/Layout/index.vue'

export const RoutesName = {

}

const Routes: RouteConfig[] = [
    {
        path: '/',
        name: 'homepage',
        component: HelloWorld
    }
]

export default Routes;