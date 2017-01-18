let MenuRoutes = {
  '/': 'routeHome',
  '/lectures': 'routeLecture',
  '/experts': 'routeExpert',
  '/teachers': 'routeTeacher'
};

let MiscRoutes = {
  '/login': 'routeLogin',
  '/register': 'routeRegister',
  '/sessions/:id': 'routeFeedbackDetails',
  '/lectures/:id': 'routeLecturesDetails',
  '/experts/:id': 'routeExpertsDetails',
  '/teachers/:id': 'routeExpertsDetails',
  '/preferences': 'routePreferences',
  '/logout': 'routeLogout'
};

export { MenuRoutes, MiscRoutes };
