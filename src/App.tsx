import './App.css'
import {NavigationBar} from "@/components/NavigationBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home.tsx";
import {PrivacyPolicy} from "@/pages/PrivacyPolicy.tsx";

function App() {

  return (
      <div>
          <NavigationBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
