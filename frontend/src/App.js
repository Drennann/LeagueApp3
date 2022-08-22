import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Login from "./pages/Login.js"
import Register from "./pages/Register.js"
import CreateCharacter from "./pages/CreateCharacter.js";
import Road from './pages/Road';
import StageDetails from './components/StageDetails';
import CharacterDetails from './components/CharacterDetails';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/leagueApp3/Dashboard' element={<DashBoard/>}></Route>
        <Route path='/leagueApp3/Login' element={<Login/>}></Route>
        <Route path='/leagueApp3/Register' element={<Register/>}></Route>
        <Route path='/leagueApp3/CreateCharacter' element={<CreateCharacter/>}></Route>
        <Route path='/leagueApp3/Road' element={<Road/>}></Route>
        <Route path='/leagueApp3/Road/:id' element={<StageDetails/>}></Route>
        <Route path='/leagueApp3/Character/:id' element={<CharacterDetails/>}></Route>
      </Routes>
    </BrowserRouter>

)}

export default App;
