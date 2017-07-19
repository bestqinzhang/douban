import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import MovieView from '@/views/MovieView'
import BookView from '@/views/BookView'
import StatusView from '@/views/StatusView'
import GroupView from '@/views/GroupView'
import Details from '@/views/Details'
import SubjectView from '@/views/SubjectView'
import LoginView from '@/views/LoginView'
import AllitemView from '@/views/AllitemView'
import SearchView from '@/views/SearchView'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/movie',
      name: 'movie-view',
      component: MovieView
    },
    {
      path: '/allitem/:rbq',
      name: 'Allitem-view',
      component: AllitemView
    },
    {
      path: '/book',
      name: 'book-view',
      component: BookView
    },
    {
      path: '/status',
      name: 'status',
      component: StatusView
    },
    {
      path: '/group',
      name: 'group-view',
      component: GroupView
    },
    {
      path: '/search',
      name: 'search-view',
      component: SearchView
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/:classify/subject/:id',
      name: 'SubjectView',
      component: SubjectView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: Register
    },
    {
      path: '/',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
