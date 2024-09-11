import './App.css'
import {NavigationBar} from "@/components/NavigationBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home.tsx";
import {PrivacyPolicy} from "@/pages/PrivacyPolicy.tsx";
import {LinkTree} from "@/pages/LinkTree.tsx";

function App() {

  return (
      <div>
          <BrowserRouter>
              <NavigationBar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                  <Route path="/hello" element={<LinkTree/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
