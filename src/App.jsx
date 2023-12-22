import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Register from "./components/Register";

function App() {
  const [showRegister, setShowRegister] = useState(true);
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRegister(false);
      setShowComponents(true);
    }, 3000); // Change this value to adjust the delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      {showComponents && <Header />}
      {/* App body */}
      <div className="app__body">
        <div className="md:flex justify-between mt-10 mx-4 ">
          {/* Sidebar */}
          {showComponents && <Sidebar />}

          {/* Feed */}
          {showComponents && <Feed />}

          {/* Widgets */}
          {showComponents && <Widgets />}

          {showRegister && <Register />}
        </div>
      </div>
    </div>
  );
}

export default App;
