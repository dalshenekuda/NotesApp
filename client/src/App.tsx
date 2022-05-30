import React from 'react';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import Routers from "./router/Routers";
import Header from "./components/Header";

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
            <Header/>
            <Routers/>
        </BrowserRouter>

      </div>
  );
}

export default App;
