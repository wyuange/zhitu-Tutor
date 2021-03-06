import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import TeacherClass from '@/components/classification'
// import Login from '@/components/public/login'
// import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/components/home'], resolve)
      // component: Home
    },
    {
      path: '/teacher_class',
      name: 'TeacherClass',
      component: (resolve) => require(['@/components/public/classification'], resolve)
      // component: TeacherClass
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['@/components/public/login'], resolve)
      // component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: (resolve) => require(['@/components/user/user'], resolve)
      // component: User
    },
    {
      path: '/register',
      name: 'Register',
      component: (resolve) => require(['@/components/public/register'], resolve)
    },
    {
      path: '/teacher_detail',
      name: 'teacherXiangQing',
      component: (resolve) => require(['@/components/teacher/teacherXiangQing'], resolve)
    },
    {
      path: '/fastlogin',
      name: 'fastLogin',
      component: (resolve) => require(['@/components/public/fastLogin'], resolve)
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: (resolve) => require(['@/components/teacher/teacher'], resolve)
    },
    {
      path: '/user_info',
      name: 'UserInfo',
      component: (resolve) => require(['@/components/user/userInfo'], resolve)
    },
    {
      path: '/teacher_info',
      name: 'TeacherInfo',
      component: (resolve) => require(['@/components/teacher/teacherInfo'], resolve)
    },
    {
      path: '/user_collect',
      name: 'UserCollect',
      component: (resolve) => require(['@/components/user/userCollect'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => require(['@/components/public/about'], resolve)
    },
    {
      path: '/user_course',
      name: 'UserCourse',
      component: (resolve) => require(['@/components/user/userCourse'], resolve)
    }
  ]
})
