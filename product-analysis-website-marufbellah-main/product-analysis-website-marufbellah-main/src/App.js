import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>

    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
