import Navbar from './Components/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import PageNotFound from './Components/PageNotFound';
import AddNewStudent from './Components/AddNewStudent';
import EditStudent from './Components/EditStudent';
import DatabaseStore from './Components/DatabaseStore';
function App() {
  return (
    <div className="App">
      <Navbar />
      <DatabaseStore>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/student' element={<Student />} />



        <Route path='/student-desc' element={<AddNewStudent />} />

        <Route path='/student-desc/:ID' element={<EditStudent />} />

        <Route path='*' element={<PageNotFound />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
      </DatabaseStore>
    </div>
  );
}

export default App;
