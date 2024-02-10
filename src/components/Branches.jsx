import React from "react"
import branchList from "../data/branches.json"

export default function BranchList(){
    return <table>
        <caption>Institute Branches</caption>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
        {
        branchList.map(
            (branch,idx)=><tr key={idx}>
                <td>{branch.id}</td>
                <td>{branch.name}</td>
                </tr>
            )
        }
            </tbody>
    </table>
}