import './App.css'
import {NavigationBar} from "@/components/NavigationBar.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";

function App() {

  return (
      <div className={"pt-[100px]"}>
          <NavigationBar/>
          <SectionTitle primaryTitle={"Lorem Ipsum"} secondaryTitle={"Lorem ipsum lorem"} logoInclude={true}/>
      </div>
  )
}

export default App
