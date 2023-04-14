import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

function App() {
  const flat = {
    "name": "Cool place in the woods",
    "imageUrl": "https://images.unsplash.com/photo-1437996533264-7a6b3f2f7dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "price": 200,
    "priceCurrency": "EUR"
  };

  return (
    <div className="app">
      <div className="main">
        <div className="flats">
          <Flat flat={flat} />
          <Flat flat={flat} />
          <Flat flat={flat} />
          <Flat flat={flat} />
        </div>
      </div>
      <div className="map"></div>
    </div>
  );
}

export default App;
