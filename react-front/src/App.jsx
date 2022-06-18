import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Staff from './Staff';
import Trainee from './Trainee';
// import MainSideBar from './components/layout/MainSideBar';

function App() {
  return (
    <div>
    {/* <MainSideBar /> */}
    <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/staff' element={<Staff />} />
     <Route path='/trainee' element={<Trainee />} />
     </Routes>
    
    </div>
  )
}

export default App
