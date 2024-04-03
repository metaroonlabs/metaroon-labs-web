import './App.css'
import {NavigationBar} from "@/components/NavigationBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home.tsx";

function App() {

  return (
      <div>
          <NavigationBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
