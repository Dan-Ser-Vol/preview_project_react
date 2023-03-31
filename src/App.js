import {useForm} from "react-hook-form";

function App() {
  //
  // let [formValue, setFormValue] = useState({login:'', password:''})


  const onsubmit = (data) => {
    console.log(data)
  }

  const {register, handleSubmit} = useForm()


  return (
      <div>
        <h1>APP COMPONENT</h1>

        <form onSubmit={handleSubmit(onsubmit)}>
          <input{...register('title', {required: true})} /> <br/>
          <input {...register('body')}/>
          <button>submit</button>
        </form>

      </div>
  );
}

export default App;
