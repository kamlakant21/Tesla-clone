import React, { Component } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import Header from "./components/header/Header";

function App({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      {showSidebar && (
        <div>
          <Backdrop onClick={() => setShowSidebar(false)} />
          <Sidebar setshowSidebar={setShowSidebar} />
        </div>
      )}
      <main className={showSidebar ? "blur-content" : ""}>
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </div>
  );
}

export default App;
