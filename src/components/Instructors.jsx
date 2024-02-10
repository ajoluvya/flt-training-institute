import React, { useState } from "react";

function InstructorList({instructors}){
    return <div><table>
        <thead>
            <tr>
                <td>Names</td>
                <td>Course Name</td>
            </tr>
        </thead>
        <tbody>
            {instructors.map((instructor,idx)=><tr key={idx}>
                <td>{instructor.firstname} {instructor.lastname}</td><td>{instructor.course}</td>
            </tr>
            )
            }
        </tbody>
    </table>
    </div>
}

export function AddInstructor(){
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [course,setCourseName] = useState('')
    const [instructors,addInstructor] = useState([])

    const onSubmit = ({firstname,lastname}) => {
        addInstructor([...instructors,{firstname,lastname,course}])
        setFirstName('');
        setLastName('');
        setCourseName('');
    }

    return <form name="instructorForm" onSubmit={(e)=>{e.preventDefault(); onSubmit({firstname,lastname});}}>
        <InstructorList instructors={instructors}/>
        <div>&nbsp;</div>
        <div>Firstname:{firstname}</div>
        <div>Lastname:{lastname}</div>
        <div>&nbsp;</div>
        <div>
            <label htmlFor="firstname">Firstname: </label>
            <input type="text" name="firstname" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="lastname">Lastname: </label>
            <input type="text" name="lastname" value={lastname} onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="course">CourseName: </label>
            <input type="text" name="course" value={course} onChange={(e)=>{setCourseName(e.target.value)}}/>
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
    </form>
}