import {useEffect, useState} from "react";
import UserComponent from "./components/UserComponent";
import {getUser, getUsers} from "./service/userService.";
import UserDetail from "./components/UserDetail";

function App() {
  let [users, setUsers] = useState([])
  let [user, setUser] = useState(null)
  let [formValue, setFormValue] = useState({login:'', password:''})


  useEffect(() => {
    getUsers().then(res => setUsers([...res.data]))
  }, [])

  const chooseUser = (id) => {
    getUser(id).then(res => setUser(res.data))
  }

  const onsubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setFormValue({...formValue , [e.target.name]:e.target.value})
  }

  return (
      <div>
        <h1>APP COMPONENT</h1>
        <form onSubmit={onsubmit}>
          <input type="text" name={'login'} onChange={onChange} value={formValue.login}/> <br/>
          <input type="text" name={'password'} onChange={onChange} value={formValue.password}/>
          <button>submit</button>
        </form>
        <h3>{formValue.login}</h3>
        <h3>{formValue.password}</h3>
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
