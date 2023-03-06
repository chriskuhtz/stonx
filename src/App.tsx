import { Outlet } from "react-router-dom";
import "./App.css";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default App;
