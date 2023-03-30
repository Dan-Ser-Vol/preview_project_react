import {useEffect, useState} from "react";
import UserComponent from "./components/UserComponent";
import {getUser, getUsers} from "./service/userService.";
import UserDetail from "./components/UserDetail";

function App() {
  let [users, setUsers] = useState([])
  let [user, setUser] = useState(null)

  useEffect(() => {
    getUsers().then(res => setUsers([...res.data]))
  }, [])

  const chooseUser = (id) => {
    getUser(id).then(res => setUser(res.data))
  }

  return (
      <div>
        <h1>APP COMPONENT</h1>
        <h2>User Detail</h2>
        {
          user && <UserDetail user={user}/>
        }
        <h2>Users list</h2>
        {
          users.map(user => <UserComponent
              key={user.id}
              user={user}
              chooseUser={chooseUser}
          />)
        }
      </div>
  );
}

export default App;
