
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/comments'}>comments page</Link>
                <br/>
            </div>


            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
                <Route path={'/'} render={() => <div>HOME PAGE</div>}/>
            </Switch>
        </Router>
    );
}