import Vue from 'vue'
import Router from 'vue-router'


import Movie from '@/components/Movie/Movie.vue'
import Detail from '@/components/Movie/Detail.vue'
import Detail2 from '@/components/Movie/Detail2.vue'
import Mall from '@/components/Mall/Mall.vue'
import Me from '@/components/Me/Me.vue'
import Show from '@/components/Show/Show.vue'
import Show2 from '@/components/Show/Show2.vue'
import Theater from '@/components/Theater/Theater.vue'
import Card from '@/components/Card/Card.vue'
import Video from '@/components/Video/Video.vue'
import Video2 from '@/components/Video/Video2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Movie},
    {path:'/card',component:Card},
    {path:'/movie',component: Movie},
    {path:'/movie/detail/:id',name:'detail',component:Detail},
    {path:'/movie/detail2/:id',name:'detail2',component:Detail2},
    {path:'/mall',component:Mall},
    {path:'/me',component:Me},
    {path:'/show',component:Show},
    {path:'/show/show2',name:'show2',component:Show2},
    {path:'/theater',component:Theater},
    {path:'/video',name:'video',component:Video},
    {path:'/video/viedo2',name:'video2',component:Video2},
    {path: '*', component: Movie}
  ]
})
