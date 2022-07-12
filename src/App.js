import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";


function App() {
  return (
    <div className="app">
        <div className="blur" style={ {top : '-10%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home /> */}
        <Profile />
        {/* <Auth /> */}
    </div>
  );
}

export default App;
