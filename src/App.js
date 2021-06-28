import {getUser, getUsers} from "./services/API";
import {useEffect, useState} from "react";
import Users from "./components/users/Users";

export default function App() {

  let [user, setUser]=useState();
  let appFn=(id)=>{
    getUser(id).then(value=>setUser(value.data));
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

    </div>
  );
}

