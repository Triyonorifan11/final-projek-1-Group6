import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home, // default page
  '/detail': Detail,
  '/login': Login,
  '/register': Register,
};

export default routes;
