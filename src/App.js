import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Signup from "./Components/ItemAuth/Signup";
import Login from "./Components/ItemAuth/Login";


function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: "-18%", right: "0"}}></div>
        <div className="blur" style={{top: "36%", left: "-8rem"}}></div>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </HashRouter>,
    </div>
  );
}

export default App;
