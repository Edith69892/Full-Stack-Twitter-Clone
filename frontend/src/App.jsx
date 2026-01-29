import "./App.css";
import LeftBar from "./components/Layout/LeftBar/LeftBar";
import Profile from "./components/pages/Profile";
// import Follows from "./components/RIghtBar/FollowComponent/Follows";
import RightBar from "./components/Layout/RIghtBar/RightBar";
// import { Login, SignUp, Home } from "./index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}

        <div className="main-container">
          <div className="component-container">
            <LeftBar />
            <main>
              <Profile />
            </main>
            <div className="rightBar">
              <RightBar />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
