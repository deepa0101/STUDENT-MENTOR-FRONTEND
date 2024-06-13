import axios from "axios";
import { useEffect, useState } from "react";
function GetStudents(){
    const [mentorName, setMentorName] = useState([]);
    const[selectedMentor,setSelectedMentor] =useState('')
    const[students, setStudents] = useState('')
useEffect(()=>{
const getMentors = async()=>{
    let res = await axios.get("https://student-mentor-2ic2.onrender.com/mentor")
    setMentorName(res.data.map(ele=>ele.name))
    
}
getMentors();
},[mentorName])
const handleSelectChange = async(event) => {
    event.preventDefault()
    let res = await axios.get(`https://student-mentor-2ic2.onrender.com/${selectedMentor}`)
    setStudents(res.data)
}
    
    return(
        <>
       <h2>Students Assigned for <u>{selectedMentor}</u></h2>
        <form>
      <label>Select Mentor Name:
        <select value={selectedMentor}onChange={e => setSelectedMentor(e.target.value)} >     
        { mentorName.map(element => (<option key={element} value={element}>{element}</option>))} 
        </select> 
      </label>
      <button onClick={handleSelectChange}>Get Students Assinged</button>
      </form>
      <h2>{students}</h2>
        </>
    )
}
export default GetStudents;