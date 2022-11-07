
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Learning from './Learning';
import Homepage from './Homepage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Homepage />}/>
          <Route path='/Learning' element = {<Learning />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
