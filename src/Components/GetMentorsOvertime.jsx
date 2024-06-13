import axios from "axios";
import { useEffect, useState } from "react";
function GetMentorsOverTime(){
    const [studentName, setStudentName] = useState([]);
    const[selectedStudent,setSelectedStudent] =useState('')
    const[mentors, setmentors] = useState('')
useEffect(()=>{
const getStudents = async()=>{
    let res = await axios.get("https://student-mentor-2ic2.onrender.com/student")
    setStudentName(res.data.map(ele=>ele.name))
    
}
getStudents();
},[studentName])
const handleSelectChange = async(event) => {
    event.preventDefault()
    let res = await axios.get(`https://student-mentor-2ic2.onrender.com/mentorStudents/${selectedStudent}`)
    setmentors(res.data)
}
    
    return(
        <>
        <h2>Mentors Assigned for <u>{selectedStudent}</u> overtime</h2>
        <form>
      <label>Select Mentor Name:
        <select value={selectedStudent}onChange={e => setSelectedStudent(e.target.value)} >     
        { studentName.map(element => (<option key={element} value={element}>{element}</option>))} 
        </select> 
      </label>
      <button onClick={handleSelectChange}>Get Students Assinged</button>
      </form>
      
      <h2>{mentors}</h2>
        </>
    )
}
export default GetMentorsOverTime;