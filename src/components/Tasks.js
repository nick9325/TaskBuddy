import React from 'react';
import TaskItem from './TaskItem';

export default function Tasks(props) {
  return (
    <div className='container'>
      <h3 className='my-3'>Tasks List</h3>
      {props.tasks===null || props.tasks.length === 0 ? "No Tasks to Display!!" :
        props.tasks.map((task) => {
          return <TaskItem task={task} key={task.sno} onDelete={props.onDelete} />
        })
      } 
    </div>
  )
}
