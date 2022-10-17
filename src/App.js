import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Recommends from './components/Recommends';
import Originals from './components/Originals';
import Trending from './components/Trending';
import NewDisney from './components/NewDisney';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/watchList" element={<Recommends />}></Route>
          <Route exact path="/originals" element={<Originals />}></Route>
          <Route exact path="/movies" element={<Trending />}></Route>
          <Route exact path="/series" element={<NewDisney />}></Route>
          <Route exact path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
