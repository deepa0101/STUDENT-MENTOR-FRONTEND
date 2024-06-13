
import './App.css'
import CreateMentor from './Components/CreateMentor'
import CreateStudent from './Components/CreateStudent'
import GetStudents from './Components/GetStudents'
import GetMentorsOverTime from './Components/GetMentorsOvertime'
function App() {
  

  return (
    <>
     <h1>Student Mentor API Task</h1>
     <CreateMentor/>
     <CreateStudent/>
     <GetStudents/>
     <GetMentorsOverTime/>
    </>
  )
}

export default App
