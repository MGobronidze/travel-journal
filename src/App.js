// import logo from './logo.svg';
import './App.css';
import Card from './components/Cards';
import data from "./data"
import Navbar from './components/Navbar';

function App() {

  const cards = data.map(item=> <Card 
          key ={item.id}
          title = {item.title}
          location ={item.location}
          googleMapsUrl ={item.googleMapsUrl}
          startDate = {item.startDate}
          endDate ={item.endDate}
          description ={item.description}
          img ={item.imageUrl}
    /> ) 

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Navbar />
      {cards}


    </div>
  );
}

export default App;
