import { RouteConfig } from 'vue-router'
// layout
import MPheader from 'views/Layout/header.vue'
import MPbody from 'views/Layout/index.vue'
import MPfooter from 'views/Layout/footer.vue'
// views
import MPhome from 'views/Home/index.vue'


export const RoutesName = {

}

const Routes: RouteConfig[] = [
    {
        path: '/',
        name: 'homepage',
        components: {MPheader, MPbody, MPfooter},
        meta: {
            needBasic: true
        },
        children: [
            {
                path: '',
                components: {default: MPhome}
            }
        ]
    }
]

export default Routes;