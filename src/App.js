import {Registery} from './register/Registery'
import {Chat} from './chat/chat'
import { Login } from './login/login'

// import {BrowserRouter,Routes,Route} from './react-router-dom';
const BrowserRouter = require("react-router-dom").BrowserRouter;

const Route = require("react-router-dom").Route;

const Routes = require("react-router-dom").Routes;

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
      <Route path="/Registery" element={<Registery/>}></Route>
      <Route path="/Chat" element={<Chat/>}></Route>
    
      </Routes>
      </BrowserRouter>

  );
}

export default App;
