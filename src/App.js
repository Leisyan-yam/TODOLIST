import './App.css';
import reading from './reading.png'
import { List } from './todolist';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1> TO DO LIST </h1>
        <img src={reading} alt="bookreadingicon" width="80px" height="80px"/>
      </div>
      <List/>

    </div>
  );
}

export default App;
