import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
      <BrowserRouter>
              <div className="main container">
                  <div className="main__grid">
                      <Header />
                      <Sidebar />
                      <div className="content">
                          <Routes>
                              <Route path="/profile" element={ <ProfileContainer/> }/>
                              <Route path="/messages" element={ <MessagesContainer/>}/>
                              <Route path="/users" element={ <UsersContainer />}/>
                          </Routes>
                      </div>
                  </div>
              </div>
      </BrowserRouter>
  );
}

export default App;
