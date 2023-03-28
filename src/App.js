import {useEffect, useState} from "react";
import UserComponent from "./components/UserComponent";
import {getUser, getUsers} from "./userService/userService.";

function App() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => setUsers([...data]))
  }, [])

  return (
      <div>
        <h1>APP COMPONENT</h1>
        {
          users.map(user => <UserComponent key={user.id} name={user.name} email={user.email}/>)
        }
      </div>
  );
}

export default App;
