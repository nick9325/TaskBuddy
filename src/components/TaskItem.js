import React from 'react'

export default function Taskitem({task,onDelete}) {
  return (
    <div>
      <h4>{task.title}</h4>
      <h4>{task.desc}</h4>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(task)}}>Delete</button>
    </div>
  )
}
