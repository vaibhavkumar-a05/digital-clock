import {useState} from "react"
import Clock from "./UserComponent"
function App(){
  const[color,setColor]=useState('red');
  return(
    <div>
      <h1>Digital Clock in React JS</h1>
      <select onChange={(evt)=>setColor(evt.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"orange"}>Orange</option>
        <option value={"blue"}>Blue</option>
        <option value={"white"}>White</option>
        <option value={"green"}>Green</option>
      </select>
      <Clock color={color}/>
    </div>
  )
}
export default App;