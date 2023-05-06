import { useState } from "react";
import { data } from "./data.js";
import { v4 as uuidv4 } from 'uuid';

const Students = () => {
  let [students, setStudents] = useState(data);
  let [newStudent, setNewStudent] = useState({name:'',age:0});
  function handleSearch(e) {
    if (e.target.value.trim()=="") {
        setStudents(data);
    }
    else{
        let searchedStudents = students.filter((student) =>
        student.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        );
        setStudents(searchedStudents);
    }
  }
  function handleSort(){
    let sortedStudents = [...students.sort((a,b)=>a.age-b.age)];
    setStudents(sortedStudents);
  }
  function handleDelete(id){
    let deletedStudent =  students.find((student,idx)=>{
        return {
            student: student.id==id,
            index:idx
        }
    });
    students.splice(deletedStudent.index,1);
    let newArray = [...students];
    setStudents(newArray);

    // let filteredStudents = students.filter((student)=>student.id!==id);
  }
  function handleSubmit(e){
    e.preventDefault();
    newStudent.id = uuidv4();
    console.log('new student: ',newStudent);
    setStudents([...students,newStudent]);
    setNewStudent({name:'',age:0});
  }
  function handleAdd(e){
    setNewStudent({...newStudent,[e.target.name]:e.target.value});
  }
  return (
    <>
      <input onChange={(e) => handleSearch(e)} placeholder="search user" />
      <button onClick={handleSort}>Sort by Age</button>
      <ul>
        {students &&
          students.map((student) => {
            return (
              <li key={student.id}>
                {student.name} | {student.age}, id: {student.id}
                <button onClick={()=>handleDelete(student.id)}>delete</button>
              </li>
            );
          })}
      </ul>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input name="name" onChange={(e)=>handleAdd(e)} value={newStudent.name} placeholder="enter name" type="text" />
        <input name="age" onChange={(e)=>handleAdd(e)} value={newStudent.age} placeholder="enter age" type="number" min="0" max="100" />
        <button type="submit">Add New Student</button>
      </form>
    </>
  );
};

export default Students;
