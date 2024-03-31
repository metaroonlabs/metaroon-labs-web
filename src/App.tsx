import './App.css'
import {NavigationBar} from "@/components/NavigationBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Lab} from "@/pages/Lab.tsx";
import {Home} from "@/pages/Home.tsx";

function App() {

  return (
      <div>
          <NavigationBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/lab" element={<Lab/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
