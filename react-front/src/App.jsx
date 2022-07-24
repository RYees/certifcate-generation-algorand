import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Staff from './Staff';
import Trainee from './Trainee';
// import MainSideBar from './components/layout/MainSideBar';
// import { TransactionsProvider } from "./context/TransactionContext";

function App() {
  return (
    <div>
     {/* <TransactionsProvider> */}
    <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/staff' element={<Staff />} />
     <Route path='/trainee' element={<Trainee />} />
     </Routes>
     {/* </TransactionsProvider> */}
    </div>
  )
}

export default App
