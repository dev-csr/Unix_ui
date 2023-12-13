import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Book from '/Volumes/srikanth_personal/Acads/UI:UX/unix_ui/unix/src/Book.js';
function App() {
  return (
    <div className="App">
      <div><img src="/Volumes/srikanth_personal/Acads/UI:UX/unix_ui/unix/src/Cenovus_Energy-Logo.wine.png" height="30px" width="50px"></img></div>
      <div><h1>Unix/Linux</h1></div>
      <div>
        <form>
          <label>
            Username:<input type="text" name="uname" id="uname" />
          </label>
          <label>
            Password:<input type="text" name="password" id="pass" />
          </label>
          <BrowserRouter>
            <div>
              <button><Link to="/Volumes/srikanth_personal/Acads/UI:UX/unix_ui/unix/src/Book.js">Signin</Link></button>
            </div>
            <Routes>
              <Route exact path="/Volumes/srikanth_personal/Acads/UI:UX/unix_ui/unix/src/Book.js" element={<Book />} />
            </Routes>      
          </BrowserRouter>

          
        </form>
      </div>
    </div>
    
  );
}

export default App;
