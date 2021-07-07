
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './components/users/Users';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import Counter from "./components/counter/Counter";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Photos from "./components/photos/Photos";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/counter'}>counter</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/comments'}>comments page</Link>
                <br/>
                <Link to={'/todos'}>todos page</Link>
                <br/>
                <Link to={'/albums'}>albums page</Link>
                <br/>
                <Link to={'/photos'}>photos page</Link>
                <br/>
                <hr/>
            </div>


            <Switch>
                <Route path={'/counter'} component={Counter}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
                <Route path={'/todos'} component={Todos}/>
                <Route path={'/albums'} component={Albums}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/'} render={() => <div>HOME PAGE</div>}/>
            </Switch>
        </Router>
    );
}