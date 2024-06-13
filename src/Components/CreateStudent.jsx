/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from 'axios';
function CreateStudent(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    async function handleSubmit(event) { 
        event.preventDefault(); 
        let mentor = await axios.post('https://student-mentor-2ic2.onrender.com/student',
        {
            name:name,
            email:email,
            course: course
    }) .then(function (response) {
        if(response.status == "200"){
            alert("Student created Successfully")
        }
      })
      .catch(function (error) {
        alert(error);
      })
      setEmail("");
      setCourse("");
      setName("")

    }
    return(
        <>
        <h2>Create Student</h2>
        <form onSubmit={handleSubmit}>
      <label>Mentor Name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Mentor Email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Course:
        <input
          type="text" 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </label>
      <button type="submit" >Create Student</button>
    </form>
        </>
    )
}
export default CreateStudent;