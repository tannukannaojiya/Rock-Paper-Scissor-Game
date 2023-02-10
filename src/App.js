import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Start from './Start';
import PlayPage from './PlayPage';
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>

     <Route path='playPage' element={<PlayPage/>}/>
    </Routes>
      
    </BrowserRouter>
   
      
      
    </>
  )
    
  
}

export default App;
