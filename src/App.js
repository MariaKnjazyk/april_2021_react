import {useEffect, useState} from "react";
import {getUser, getUsers, getUserPosts} from "./services/API";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";



export default function App() {
  let [userPosts,setUserPosts]=useState();
  let [user, setUser]=useState();
  let appFn=(id)=>{
    getUser(id).then(value=>setUser(value.data));
    getUserPosts(id).then(value=>setUserPosts(value.data));
  };

  let [users, setUsers]=useState([]);
  useEffect(()=>{
    getUsers().then(value => setUsers(value.data));
  },[]);
  return (
    <div>
      <Users items={users} appFn={appFn}/>
      <hr/>
      {
        user && <div>{JSON.stringify(user)}</div>
      }
     **********
      {
          userPosts && <Posts items={userPosts}/>
      }

    </div>
  );
}

