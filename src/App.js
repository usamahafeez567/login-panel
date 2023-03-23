import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";

export default function App() {
  const [currentForm, setCurrentForm] = useState("signup");

  const toggleForm = (formCurr) => {
    setCurrentForm(formCurr);
  };

  return (
    <div className="App">
      {currentForm === "signup" ? (
        <Signup onFormSwitch={toggleForm} />
      ) : (
        <Login onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
