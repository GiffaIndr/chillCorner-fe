import {BrowserRouter, Routes, Router} from 'react-router-dom';
import Dashboard from './app/pages/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Router path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
