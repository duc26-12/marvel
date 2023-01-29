import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";
import Contacts from "../pages/Contacts/Contacts";
import Explore from "../pages/Explore/Explore";
import Message from "../pages/Message/Message";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Feedback from "../pages/Feedback/Feedback";
import Store from "../pages/Store/Store";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import Login from "../pages/Login/Login";
import Internships from "../pages/Internships/Internships";
import Advertising from "../pages/Advertising/Advertising";

import routesConfig from "../config/routes";

const publicRoutes = [
  { path: routesConfig.root, component: Login },
  { path: routesConfig.home, component: Home },
  { path: routesConfig.info, component: Info },
  { path: routesConfig.contacts, component: Contacts },
  { path: routesConfig.explore, component: Explore },
  { path: routesConfig.messages, component: Message },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.settings, component: Settings },
  { path: routesConfig.feedback, component: Feedback },
  { path: routesConfig.store, component: Store },
  { path: routesConfig.internships, component: Internships },
  { path: routesConfig.subscriptions, component: Subscriptions },
  { path: routesConfig.advertising, component: Advertising },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
