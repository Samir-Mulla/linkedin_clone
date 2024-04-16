import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
// import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        <div className="md:flex justify-between mt-10 mx-4 ">
          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <Feed />

          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
