
const routes = [
  {
    path: '/',
    name:'Home',

    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/requests',name: 'Requisições',icon: 'eva-swap', component: () => import('pages/Requests.vue') },
    ]

  },
  {
    path: '/debugger',
    name:'Depurador',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'Depurador', component: () => import('pages/Debugger.vue') },
    ]

  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
