import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MyProject from '@/components/MyProject'
import Configuration from '@/components/Configuration'
import ArticleDetail from '@/components/ArticleDetail'
import Register from '@/components/Register'
import Upload from '@/components/Upload'
import AnalysisMenu from '@/components/AnalysisMenu'
import Dictionary from '@/components/Dictionary'
import EventExtract from '@/components/EventExtract'
import EventResult from '@/components/EventResult'
import ResultDetail from '@/components/ResultDetail'
import DictionaryDetail from '@/components/DictionaryDetail'
import cloud from "@/components/cloud"
import DictionaryCreate from "@/components/DictionaryCreate"
import TransMenu from "@/components/TransMenu"
import Translate from "@/components/Translate"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        //注册
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                keepAlive: false
            }
        },
        //登录
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                keepAlive: false
            }
        },
        //我的项目
        {
            path: '/myProject',
            name: 'MyProject',
            component: MyProject,
            meta: {
                keepAlive: true
            }

        },
        //分析配置菜单
        {
            path: '/analysisMenu',
            name: 'AnalysisMenu',
            component: AnalysisMenu,
            meta: {
                keepAlive: true
            }
        },
        //分析配置
        {
            path: '/configuration/:id',
            name: 'Configuration',
            component: Configuration,
            meta: {
                keepAlive: true
            }
        },
        //详情
        {
            path: '/articleDetail/:lib/:id',
            name: 'ArticleDetail',
            component: ArticleDetail,
            meta: {
                keepAlive: true
            }
        },
        //导入
        {
            path: '/upload',
            name: 'Upload',
            component: Upload,
            meta: {
                keepAlive: true
            }
        },
        //字典
        {
            path: '/dictionaryCreate',
            name: 'DictionaryCreate',
            component: DictionaryCreate,
            meta: {
                keepAlive: true
            }
        },
        //字典创建
        {
            path: '/dictionary',
            name: 'Dictionary',
            component: Dictionary,
            meta: {
                keepAlive: true
            }
        },
        //字典
        {
            path: '/dictionaryDetail/:id',
            name: 'DictionaryDetail',
            component: DictionaryDetail,
            meta: {
                keepAlive: false
            }
        },
        //新建提取
        {
            path: '/eventExtract',
            name: 'EventExtract',
            component: EventExtract,
            meta: {
                keepAlive: true
            }
        },
        //提取结果
        {
            path: '/eventResult/:id',
            name: 'EventResult',
            component: EventResult,
            meta: {
                keepAlive: true
            }
        },
        //结果详情
        {
            path: '/resultDetail/:id',
            name: 'ResultDetail',
            component: ResultDetail,
            meta: {
                keepAlive: true
            }
        },
        //结果详情
        {
            path: '/excel',
            name: 'Cloud',
            component: cloud,
            meta: {
                keepAlive: true
            }
        },
        // 字典翻译
        {
            path: '/transMenu',
            name: 'TransMenu',
            component: TransMenu,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/translate/:id',
            name: 'Translate',
            component: Translate,
            meta: {
                keepAlive: true
            }
        }
    ]
})