import './App.css';
import Loginform from './Components/Loginform';
import Listpage from './Components/Listpage';
import {Routes,Route} from 'react-router-dom';
import DepartmentList from './Components/DepartmentList';

function App() {
  return (
    <div className="App">
     
     <Routes>
     <Route path="/" element={<Loginform/>}/>
      
       <Route path="/listpage" element={<Listpage/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
