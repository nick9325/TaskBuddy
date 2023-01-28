import './App.css';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
  let initTask;
  if (localStorage.getItem("tasks") === null) {
    initTask = [];
  }
  else {
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }

  const onDelete = (task) => {

    setTasks(tasks.filter((e) => {
      return e !== task;
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const addTask = (title, desc) => {
    let sno;
    if (tasks === null) {
      setTasks([]);
    }
    if (tasks.length === 0) {
      sno = 0;
    }
    else {
      sno = tasks[tasks.length - 1].sno + 1;
    }
    const myTask = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTasks([...tasks, myTask]);
  }

  const [tasks, setTasks] = useState(initTask);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


  return (
    <>
      <div className="container">
        <h1 className='title'>TaskBuddy</h1>
        <div className="cont-border">
          <div className="text">
            <AddTask addTask={addTask} />
            <Tasks tasks={tasks} onDelete={onDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
