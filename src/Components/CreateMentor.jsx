/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from 'axios';
function CreateMentor(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [expertise, setExpertise] = useState("");
    async function handleSubmit(event) { 
        event.preventDefault(); 
        let mentor = await axios.post('https://student-mentor-2ic2.onrender.com/mentor',
        {
            name:name,
            email:email,
            expertise: expertise
    }) .then(function (response) {
        if(response.status == "200"){
            alert("Mentor created Successfully")
        }
      })
      .catch(function (error) {
        alert(error);
      })
      setEmail("");
      setExpertise("");
      setName("")

    }
    return(
        <>
        <h2>Create Mentor</h2>
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
      <label>Area of Expertise:
        <input
          type="text" 
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
        />
      </label>
      <button type="submit" >Create Mentor</button>
    </form>
        </>
    )
}
export default CreateMentor;