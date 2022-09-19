import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Register />
        </div>
        <div className="col-lg-6">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
