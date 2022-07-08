import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const headerStyle = {
    divClass: "text-3xl font-bold flex justify-center py-8"
  }

  const darkPrefer = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = React.useState(darkPrefer)

  const userPrefer = localStorage.getItem("isUserPreferDark")
  const userPreferValue = JSON.parse(userPrefer) 

  React.useEffect(() => {
    localStorage.setItem("isUserPreferDark", darkMode)
  },[darkMode])
 
  React.useEffect(() => {
    if (userPrefer) {
      setDarkMode(userPreferValue) 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? "bg-gray-700 h-auto" : "bg-white-200"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="max-w-xl mx-auto flex flex-col content-center min-h-screen">
        <h1 className={`${headerStyle.divClass} ${darkMode ? "text-white" : "text-black"}`}>Register form</h1>
        <Form darkMode={darkMode}/>
      </div>
    </div>
  );
}

export default App;
