import React from "react"

import courseList from "../data/courses.json"

export default function CourseList(){
    return <table>
        <caption>Institute Courses</caption>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
        {
        courseList.map(
            (course,idx)=><tr key={idx}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                </tr>
            )
        }
            </tbody>
    </table>
}