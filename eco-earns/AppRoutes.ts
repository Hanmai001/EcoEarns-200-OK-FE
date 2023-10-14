export const AppRoutes = {
  main: '/',
  service: '/service',
  categories: '/categories',
  categoriesDetail: '/categories/:ref',
  newsDetail: '/news/:ref',
  serviceDetail: '/service/:ref',
  network: '/network',
  networks: '/networks',
  partners: '/networks/partners',
  startups: '/networks/startups',
  showroom: '/showroom',
  infrastructure: '/infrastructure',
  booking: '/booking',
  profile: '/user/profile',
  admin: {
    dashboard: '/admin',
    categories: '/admin/categories',
    posts: '/admin/posts',
    rooms: '/admin/rooms',
    booking: '/admin/booking',
    users: '/admin/users',
    ads: '/admin/ads',
    templates: {
      root: '/admin/templates',
      homepage: '/admin/templates/homepage',
      partner: '/admin/templates/partner',
      startup: '/admin/templates/startup',
      service: '/admin/templates/service',
      showroom: '/admin/templates/showroom',
    }
  }
}