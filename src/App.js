
import Menu from "./components/menu/Menu";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
    <div>
      <Menu
          pages={['users page', 'comments page','posts page']}
          classes={['xxx','yyy']}
      />
      <Posts/>
      <Menu
          pages={['about','team']}
          classes={['asd','qwe']}
      />
    </div>
  );
}

