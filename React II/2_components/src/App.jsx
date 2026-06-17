import Login from "./components/Login";
import Map from "./components/Map";
import Navbar from "./components/Navbar"
function App(){
  let Data = "ILS Srinagar"
  const changeName = ()=>{
    Data = "ILS"
    console.log(Data);
  }
  return(
    <div>
      <Navbar name={Data} changeName={changeName}/>
      <h1>Hello world</h1>
      <Navbar name={"ILS Budgam"}/>
      <Login name={"sahib"} />
      <Login notification={false} />
      <Map/>
    </div>
  )
}

export default App