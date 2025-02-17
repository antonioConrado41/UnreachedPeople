import './App.css';
import {Header} from './components/Header';
import {UnreachedList} from './components/UnreachedList';
import {Footer} from './components/Footer';
 
function App() {

  return (
    <div className="App">
      <Header />
        <main>
         <UnreachedList />
        </main>
      <Footer/>
    </div>
  );
}

export default App;
