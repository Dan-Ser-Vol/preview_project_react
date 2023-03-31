import {useForm} from "react-hook-form";
import {savePost} from "./service/allService.";

function App() {
  //
  // let [formValue, setFormValue] = useState({login:'', password:''})


  const onsubmit = (post) => {
  savePost(post).then(({data}) => console.log(data));
  }

  const {register, handleSubmit} = useForm()

  return (
      <div>
        <h1>APP COMPONENT</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input{...register('title', {required: true})} /> <br/>
          <input {...register('body')}/>
          <select {...register('userId')}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button>submit</button>
        </form>

      </div>
  );
}

export default App;
