import VueRouter, { Location } from "vue-router";
import routes from "./routes";
export type RouterMode = "hash" | "history" | "abstract" | undefined;
export default function (mode: RouterMode = "hash", linkActiveClass: string = "router-active", base: string = '/') {
    const router = new VueRouter({
        routes,
        mode,
        linkActiveClass,
        base,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            return { x: 0, y: 0 };
        }
    });

    router.beforeEach(async (to, from, next) => {
        next()
    })
    
    return router;
}