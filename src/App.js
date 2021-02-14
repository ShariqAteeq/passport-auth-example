import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import UserDetails from "./components/user";

function App() {
  return (
    <div className="App">
      <h1>Passport Authentication</h1>
      <Login />
      <br />
      <Register />
      <br />
      <UserDetails />
    </div>
  );
}

export default App;
