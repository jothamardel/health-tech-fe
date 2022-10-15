
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import CreateProfile from './components/CreateProfile/CreateProfile';
import PatientsList from './components/PatientsList/PatientsList'
import NotFeelingWell from './components/NotFeelingWell/NotFeelingWell'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import DoctorHospital from './components/Doctor-Hospital/Doctor-Hospital'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<CreateProfile/>}/>
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
