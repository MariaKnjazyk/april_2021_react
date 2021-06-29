import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {

  return (
      <Router>
                 <div>
                   <Link to={'/'}>home</Link>
                   <br/>
                   <Link to={'/users'}>to users page</Link>
                   <br/>
                   <Link to={'/posts'}>to posts page</Link>
                   <br/>
                   <Link to={'/comments'}>to comments page</Link>
                   <br/>


                   <Switch>

                     <Route path={'/users'} render={(props) => <Users {...props}/> }/>
                     <Route path={'/posts'} render={(props) => <Posts {...props}/> }/>
                     <Route path={'/comments'} render={(props) => <Comments {...props}/> }/>

                     <Route path={'/'} render={() => <div>HOME PAGE</div>}/>

                   </Switch>



                 </div>
               </Router>

   );
}


