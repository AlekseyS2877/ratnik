import React from "react";
import MainNav from "./Components/MainNav";
import TimeTable from "./Components/TimeTable";

function App() {
   return (
      <div className="App">
         <MainNav />
         <div className="container">
            <TimeTable />
         </div>
      </div>
   );
}

export default App;
