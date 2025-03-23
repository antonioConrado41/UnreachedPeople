import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home  from './components/pages/Home';
import MapMain from './components/pages/MapMain';
 
function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MapMain/>}/>
      </Routes>
    </div>    
  )
}
export default App;
