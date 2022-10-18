import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Table from './components/Table'
import CreateStudent from './components/CreateStudent';

function App() {
  const [student, setStudent] = useState([])
  const [addStudent, setaddStudent] = useState(false)
  const [update, setUpdate] = useState(false)
  const [studentId, setStudentId] = useState(-1)
  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data)
        setStudent(students.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllStudent()
  }, [update])
  async function postHandlder(data) {

    if (studentId !== -1) {
      const post = await fetch('http://127.0.0.1:8000/api/student/' + studentId, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }


      })
      console.log(post)
      setStudentId(-1)
    }
    else {
      const post = await fetch('http://127.0.0.1:8000/api/student/create', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
      console.log(post)
    }

    setUpdate((prev) => !prev)
    setaddStudent((prevSate) => !prevSate)
    console.log("inside post handle ", data)
  }

  const editHandler = (id) => {
    setStudentId(id)
    setaddStudent((prev) => !prev)
    console.log(id)
  }
  
  async function deleteHandler (id) {
    setStudentId(id)
    const post = await fetch('http://127.0.0.1:8000/api/student/' + id, {
        method: "Delete",
        headers: { "Content-type": "application/json; charset=UTF-8" }})
    console.log(post)
    setUpdate((prev) => !prev)
    setStudentId(-1)
    console.log(id)
  }


  return (
    <div  >
      <div className="App">  {!addStudent && <Table student={student} onEdit={editHandler} onDelete={deleteHandler} ></Table>}</div>
      {addStudent && <CreateStudent onPost={postHandlder} studentId={studentId}></CreateStudent>}
      {!addStudent && <div className="App">   <button className='btn btn-success App' onClick={() => setaddStudent(true)}>Add</button></div>}

      {console.log("insise app")}


    </div>
  );
}

export default App;
