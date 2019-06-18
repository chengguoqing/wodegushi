import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/choujiang',
            name: 'choujiang', 
            component: () =>
                import ('./page/choujiang'),
            meta: {
                title: '集故事抽奖',
           
            },

    },  {
            path: '/',
            name: 'index',
            component: () =>
                import ('./page/scgs'),
            meta: {
                title: '生成故事',
                keepAlive: true // 需要被缓存
            },

    },{
            path: '/test',
            name: 'test',
            component: () =>
                import ('./page/test'),
            meta: {
                title: '标题'
            },

    },{
            path: '/zpht',
            name: 'zpht',
            component: () =>
                import ('./zpht/index'),
            meta: {
                title: '标题'
            },

    },{
            path: '/has_story',
            name: 'has_story',
            component: () =>
                import ('./page/has_story'),
            meta: {
                title: '已有故事'
            },

    },{
            path: '/test_e',
            name: 'test_e',
            component: () =>
                import ('./page/test_e'),
            meta: {
                title: '已有故事'
            },

    }



  ]
})
