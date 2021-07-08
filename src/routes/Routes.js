import {Route, Switch} from "react-router-dom";
import Counter from "../components/counter/Counter";
import Users from "../components/users/Users";
import Posts from "../components/posts/Posts";
import Comments from "../components/comments/Comments";
import Todos from "../components/todos/Todos";
import Albums from "../components/albums/Albums";
import Photos from "../components/photos/Photos";

const Routes = () => {
    return (
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
    )
}

export default Routes;