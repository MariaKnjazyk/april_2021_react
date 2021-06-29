const getItems =(itemsName)=> fetch('https://jsonplaceholder.typicode.com/'+itemsName).then((value)=>value.json());
const getUserPosts=(id)=>fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts').then((value)=>value.json());
const getPostComm=(id)=>fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').then((value)=>value.json());


export {getItems, getUserPosts, getPostComm};