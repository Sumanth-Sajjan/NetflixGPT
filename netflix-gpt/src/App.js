import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Route, Routes } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
