import SimpsonComponent from "./components/SimpsonComponent";

const simpsons = [
  {
    id: 1,
    name: 'Homer',
    image: 'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'
  },
  {id: 2, name: 'Bart', image: 'https://static.wikia.nocookie.net/simpsonstappedout/images/d/d2/Bart_Unlock.png'},
  {
    id: 3,
    name: 'Marge',
    image: 'http://1.bp.blogspot.com/-KnTG4dOLeA4/TskxcSZdDII/AAAAAAAAADs/qTM_-nVXSCc/s1600/200px-Marge_Simpson.png'
  },
  {
    id: 4,
    name: 'Meggy',
    image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Maggie_Simpson.png/200px-Maggie_Simpson.png'
  },
]

function App() {
  return (
      <div>
        <h1>APP COMPONENT</h1>
        {
          simpsons.map(person => <SimpsonComponent key={person.id} name={person.name} image={person.image}/>)
        }
      </div>
  );
}

export default App;
