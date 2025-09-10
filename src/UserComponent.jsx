import {useEffect,useState} from "react";
const Clock=({color})=>{
    const[time,setTime]=useState(new Date().toLocaleTimeString());
    const[date,setDate]=useState(new Date().toLocaleDateString());
    useEffect(()=>{
        setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)
    },[])
    return(
        <div>
            <h1 style={{color:color, backgroundColor:"black",width:"150px",padding:"10px",borderRadius:"5px"}}>{date}</h1>
            <h1 style={{color:color, backgroundColor:"black",width:"150px",padding:"10px",borderRadius:"5px"}}>{time}</h1>
        </div>
    )
}
export default Clock;