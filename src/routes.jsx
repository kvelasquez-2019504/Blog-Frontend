import { Dashboard } from './assets/pages/dashboard/';
import { AuthPage } from './assets/pages/auth';
import {Publication} from './components/Publication/Publication';

const routes = [ 
    {path:"/", element: <AuthPage />},
    {path:"/list", element: <Dashboard/>},
    {path:"/publications/:idPublication", element: <Publication/>}
];

export default routes;  