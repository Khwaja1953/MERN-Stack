import React,{useState} from 'react'

const Task = () => {
     const data = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 20,
    gender: "Male",
    course: "Computer Science",
    semester: 4,
    marks: 85
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 21,
    gender: "Female",
    course: "Information Technology",
    semester: 5,
    marks: 92
  },
  {
    id: 3,
    name: "Rahul Verma",
    age: 19,
    gender: "Male",
    course: "Electronics",
    semester: 3,
    marks: 78
  },
  {
    id: 4,
    name: "Ananya Gupta",
    age: 22,
    gender: "Female",
    course: "Data Science",
    semester: 6,
    marks: 88
  },
  {
    id: 5,
    name: "Karan Mehta",
    age: 20,
    gender: "Male",
    course: "Mechanical Engineering",
    semester: 4,
    marks: 81
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    age: 21,
    gender: "Female",
    course: "Computer Science",
    semester: 5,
    marks: 95
  },
  {
    id: 7,
    name: "Arjun Kumar",
    age: 19,
    gender: "Male",
    course: "Civil Engineering",
    semester: 3,
    marks: 73
  },
  {
    id: 8,
    name: "Neha Raina",
    age: 22,
    gender: "Female",
    course: "Artificial Intelligence",
    semester: 6,
    marks: 90
  },
  {
    id: 9,
    name: "Vikram Patel",
    age: 20,
    gender: "Male",
    course: "Electrical Engineering",
    semester: 4,
    marks: 84
  },
  {
    id: 10,
    name: "Mehak Khan",
    age: 21,
    gender: "Female",
    course: "Cyber Security",
    semester: 5,
    marks: 87
  }
];
 const [Student,setStudent] = useState(data);
 const [btn,setBtn] = useState(false);
  return (
    <div>
        <h1><button onClick={()=>{setBtn(!btn)}}>{btn ? "hide": "show"}</button></h1>
        {btn &&
        <div>

        {Student.map((item)=>(
            <div key={item.id}>
                <h2>Name:{item.name}</h2>
            </div>
        ))}
        </div>
    }
    </div>
  )
}

export default Task