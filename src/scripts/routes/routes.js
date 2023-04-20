import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Contact from '../views/pages/contact';
import Product from '../views/pages/product';

const routes = {
  '/': Home, // default page
  '/detail': Detail,
  '/login': Login,
  '/register': Register,
  '/contact': Contact,
  '/product': Product,
};

export default routes;
