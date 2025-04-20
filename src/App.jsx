import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App
