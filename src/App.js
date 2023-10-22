import './App.css';
import {useState} from "react"
import data from './data';
function App() {
  const [cantons, setCantons]=useState(data);
  return (
    <main>
    <section className='container'>
      <h3>National Holidays Dates</h3>
      {cantons.map((canton) => {
        return (
          <div key={canton.id} className="holiday">
            <img src={canton.img} />
            <div>
              <p>{canton.title}</p>
              <p>{canton.tel}</p>
            </div>
          </div>
        )
      })}
        <button onClick={()=> setCantons([])}>Clear All</button>
      </section>
    </main>
  );
}


export default App;












 