import Users from "./components/users/Users";
import Menu from "./components/menu/Menu";

export default function App() {
  return (
    <div>
      <Menu
          pages={['users page', 'comments page','posts page']}
          classes={['xxx','yyy']}
      />
      <Users/>
      <Menu
          pages={['about','team']}
          classes={['asd','qwe']}
      />
    </div>
  );
}

