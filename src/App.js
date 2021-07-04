
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './components/users/Users';

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
            </div>


            <Switch>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </Router>
    );
}