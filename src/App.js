import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import Posts from "./components/posts/Posts";


export default function App() {

  let [post, setPost]=useState();
  let appFn=(id)=>{
    getPost(id).then(value=>setPost(value.data));
  };

  let [posts, setPosts]=useState([]);
  useEffect(()=>{
    getPosts().then(value => setPosts(value.data));
  },[]);
  return (
    <div>
      <Posts items={posts} appFn={appFn}/>
      <hr/>
      {
        post && <div>{JSON.stringify(post)}</div>
      }

    </div>
  );
}

