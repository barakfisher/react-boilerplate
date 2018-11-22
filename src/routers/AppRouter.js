import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import ReactDOM from 'react-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


//setting and exporting history instance to make routing (using hisoty) possiable in other places
export const history = createHistory();

const AppRouter = () =>(
    <Router history = {history}>
        <div>
            <Switch> 
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ DashboardPage  } exact={true}/>
                <Route component={  NotFoundPage  } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
