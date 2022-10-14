
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import PatientsList from './components/PatientsList/PatientsList'
import NotFeelingWell from './components/NotFeelingWell/NotFeelingWell'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import DoctorHospital from './components/Doctor-Hospital/Doctor-Hospital'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route pat='/dashboard' element={<Dashboard/>}/>
        <Route path="/activepatients" element={<PatientsList/>}/>
        <Route path="/pastpatients" element={<PatientsList/>}/>
        <Route path="/not-feeling-well" element={<NotFeelingWell/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/doctor-hospital" element={<DoctorHospital/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
